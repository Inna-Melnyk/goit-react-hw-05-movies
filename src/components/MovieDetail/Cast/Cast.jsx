import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'api/request';
import { CastList } from './CastList';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessages } from 'components/Error/ErrorMessages';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortCtrl = useRef();

  const { movieId } = useParams();

  const castUrl = `movie/${movieId}/credits`;

  useEffect(() => {
    const getCast = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }

      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const castData = await fetchMovies(castUrl, abortCtrl.current.signal);
        setCast(castData.cast);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [castUrl]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessages>{error}</ErrorMessages>}
    
      {cast.length !== 0 ? (
       <CastList cast={cast} />
      ) : (
        <p>There's no information about cast</p>
      )}
    </div>
  );
};

export default Cast;
