import { useState, useRef, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesbyTitle } from 'api/request';
import { SearchBox } from 'components/Loader/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  // const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const abortCtrl = useRef();

  const location = useLocation();

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    console.log(nextParams);
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const getDetailsMovies = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const movieData = await fetchMoviesbyTitle(
          movieName,
          abortCtrl.current.signal
        );
        setMovie(movieData);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getDetailsMovies();
  }, [movieName]);

  return (
    <div>
      <h3>Movies Page</h3>
      <SearchBox value={movieName} onChange={updateQueryString} />
      {!isLoading && movie.length !== 0 && <MoviesList data={movie} />}{' '}
    </div>
  );
};

export default Movies;
