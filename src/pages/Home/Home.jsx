import { useEffect, useRef, useState } from 'react';
import { fetchMovies } from 'api/request';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { ErrorMessages } from 'components/Loader/Error/ErrorMessages';
import { Title } from './Home.styled';
import { useLocation } from 'react-router-dom';

const trandingUrl = 'trending/all/day';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortCtrl = useRef();

  const location = useLocation();

  useEffect(() => {
    const getTrendingMovies = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const moviesData = await fetchMovies(
          trandingUrl,
          abortCtrl.current.signal
        );
        setMovies(moviesData.results);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      {error && <ErrorMessages>{error}</ErrorMessages>}
      {!isLoading && movies.length > 0 && <MoviesList data={movies} locationState={{from:location}} />}
    </>
  );
};

export default Home;
