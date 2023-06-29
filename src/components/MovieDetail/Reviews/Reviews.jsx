import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovies } from 'api/request';
import { ReviewList } from './ReviewList';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessages } from 'components/Error/ErrorMessages';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const reviewsUrl = `movie/${movieId}/reviews`;

  const abortCtrl = useRef();

  useEffect(() => {
    const getReviews = async () => {
      if (abortCtrl.current) {
        abortCtrl.current.abort();
      }
      abortCtrl.current = new AbortController();

      try {
        setIsLoading(true);
        setError(null);

        const reviewsData = await fetchMovies(
          reviewsUrl,
          abortCtrl.current.signal
        );

        setReviews(reviewsData.results);
        setError(null);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [reviewsUrl]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessages>{error}</ErrorMessages>}

      {reviews.length !== 0 ? (
        <ReviewList reviews={reviews} />
      ) : (
        <p
          style={{
            color: 'red',
          }}
        >
          There's no reviews yet
        </p>
      )}
    </div>
  );
};

export default Reviews;
