import { Image, Title, Text } from "./CastItem.styled";
export const CastItem = ({ item }) => {
  console.log(item);
  return (
    <>
      {item.profile_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
          alt={item.name}
          width="220"
        />
      ) : (
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
          alt="placeholder"
          width="220"
        />
      )}
      <Title> {item.name}</Title>
      <Text>Character: {item.character}</Text>
    </>
  );
};
