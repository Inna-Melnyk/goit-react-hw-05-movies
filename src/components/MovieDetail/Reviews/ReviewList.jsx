import PropTypes from 'prop-types';

export const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(item => {
        return (
          <li key={item.id}>
            <h4>Author: {item.author}</h4>
            <p>{item.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
