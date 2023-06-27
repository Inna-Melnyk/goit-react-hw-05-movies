export const CastItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
          alt={item.name}
          width="200"
        />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
          alt="placeholder"
          width="200"
        />
      )}
      <h3> {item.name}</h3>
      <p>{item.character}</p>
    </div>
  );
};
