import { useEffect, useState, useRef } from 'react';
import { fetchMovies } from 'api/request';
import { useParams, Outlet } from 'react-router-dom';
import { MovieDetailedInfo } from 'components/MovieDetail/MovieDetailedInfo';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessages } from 'components/Loader/Error/ErrorMessages';
import { InfoLink, Item,List } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const abortCtrl = useRef();

  const detailsSearchUrl = `movie/${movieId}`;

  useEffect(() => {
    const getDetailsMovies = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const movieData = await fetchMovies(
          detailsSearchUrl,
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
  }, [detailsSearchUrl]);

            console.log(movie);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessages>{error}</ErrorMessages>}
      {movie !== null && <MovieDetailedInfo movieInfo={movie} />}
      <List>
        <Item>
          <InfoLink to="cast">Read about the cast</InfoLink>
        </Item>
        <Item>
          <InfoLink to="reviews">Go through the reviews</InfoLink>
        </Item>
      </List>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
