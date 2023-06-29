import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  const { genres, poster_path, title, name, overview, vote_average } =
    movieInfo;

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  const movieGenres = genres.map(item => item.name).join(', ');

  return (
    <>
      <BackLink to={backLinkLocation.current}>
        <TfiControlBackward size="18" />
        <span>Back</span>
      </BackLink>
      <Wrapper>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title || name}
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
          <Title>{title || name}</Title>
          <Text>User score {Math.floor(vote_average * 10)}%</Text>
          <Subtitle>Overview</Subtitle>
          <Text>{overview}</Text>
          <Subtitle>Genres</Subtitle>
          <Text>{movieGenres}</Text>
        </Info>
      </Wrapper>
      <List>
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

MovieDetailedInfo.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
