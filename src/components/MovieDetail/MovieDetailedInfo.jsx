import { useLocation } from 'react-router-dom';
import { TfiControlBackward } from 'react-icons/tfi';
import {
  Wrapper,
  Info,
  Title,
  Text,
  Subtitle,
  BackLink,
  Image,
  InfoLink,
  Item,
  List,
} from './MovieDetailedInfo.styled';
import { useRef } from 'react';

import { MdOutlineRateReview } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';

export const MovieDetailedInfo = ({ movieInfo }) => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  const genre = movieInfo.genres;
  const genres = genre.map(item => item.name).join(', ');

  return (
    <>
      <BackLink to={backLinkLocation.current}>
        <TfiControlBackward size="18" />
        <span>Back</span>
      </BackLink>

      <Wrapper>
        {movieInfo.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.title || movieInfo.name}
            width="300"
          />
        ) : (
          <Image
            src="https://cringemdb.com/img/movie-poster-placeholder.png"
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
      </Wrapper> <List>
          <Item>
            <InfoLink to="cast">
              <IoIosPeople size="18" />
              <span> Read about the cast</span>
            </InfoLink>
          </Item>
          <Item>
            <InfoLink to="reviews">
              <MdOutlineRateReview size="18" />
              <span>Go through the reviews</span>
            </InfoLink>
          </Item>
        </List>
    </>
  );
};
