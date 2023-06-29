import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesbyTitle } from 'api/request';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessages } from 'components/Error/ErrorMessages';

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
 
  const movieName = searchParams.get('query') ?? '';

  const abortCtrl = useRef();

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }

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

        if (movieData.length === 0) {
          return setError(
            'Oops.. There`s no movies matching your request. Please try again!'
          );
        }
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    getDetailsMovies();
  }, [movieName]);

  return (
    <div>
      <h3>Find your movie!</h3>
      <SearchBox value={movieName} onSubmit={updateQueryString} />
      {!isLoading && movie.length !== 0 && <MoviesList data={movie} />}
      {isLoading && <Loader />}
      {error && <ErrorMessages>{error}</ErrorMessages>}
    </div>
  );
};

export default Movies;
