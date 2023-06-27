import { useLocation } from 'react-router-dom';
import { TfiControlBackward } from 'react-icons/tfi';
import {
  Wrapper,
  Info,
  Title,
  Text,
  Subtitle,
  BackLink,
} from './MovieDetailedInfo.styled';

export const MovieDetailedInfo = ({ movieInfo }) => {
  const location = useLocation();

  const genre = movieInfo.genres;
  const genres = genre.map(item => item.name).join(', ');

  return (
    <>
      <BackLink to={location.state.from}>
        <TfiControlBackward size="18" />
        <span>Back</span>
      </BackLink>

      <Wrapper>
        {movieInfo.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.title || movieInfo.name}
            width="300"
          />
        ) : (
          <img
            src="https://cutewallpaper.org/24/image-placeholder-png/croppedplaceholderpng-%E2%80%93-osa-grappling.png"
            alt="placeholder"
            width="300"
          />
        )}

        <Info>
          <Title>{movieInfo.title || movieInfo.name}</Title>
          <Text>User score {Math.floor(movieInfo.vote_average * 10)}%</Text>
          <Subtitle>Overview</Subtitle>
          <Text>{movieInfo.overview}</Text>
          <Subtitle>Genres</Subtitle>
          <Text>{genres}</Text>
        </Info>
      </Wrapper>
    </>
  );
};
