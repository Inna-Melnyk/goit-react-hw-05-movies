

export const ReviewList = ({ reviews }) => {
  return (
        <ul>
        {reviews.map(item => {
          return (
            <li key={item.id}>
                  <h4>Author: {item.author}</h4>
                  <p>{ item.content}</p>
            </li>
          );
        })}
      </ul>
  );
};
