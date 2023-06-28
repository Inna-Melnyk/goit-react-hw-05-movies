import { useLocation } from 'react-router-dom';
import { List, Title, Item, MovieLink, Image } from './MovieList.styled';

export const MoviesList = ({ data }) => {

    const location = useLocation();

  return (
    <List>
      {data.map(({ id, poster_path, title, name }) => {
        return (
          <Item key={id}>
            <MovieLink
              to={location.pathname === '/movies' ? `${id}` : `movies/${id}`}
              state={{ from: location }}
            >
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
              <Title>{title ? title : name}</Title>
            </MovieLink>
          </Item>
        );
      })}
    </List>
  );
};
