

export const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3> Review List</h3>
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
    </div>
  );
};
