import PropTypes from 'prop-types';
import { Image, Title, Text } from './CastItem.styled';

export const CastItem = ({ item }) => {
  const { name, profile_path, character } = item;
  return (
    <>
      {profile_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
          width="220"
        />
      ) : (
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010"
          alt="placeholder"
          width="220"
        />
      )}
      <Title> {name}</Title>
      <Text>Character: {character}</Text>
    </>
  );
};

CastItem.propTypes = {
  item: PropTypes.object.isRequired,
};
