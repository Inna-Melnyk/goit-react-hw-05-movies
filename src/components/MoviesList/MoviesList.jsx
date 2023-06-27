import { useLocation } from 'react-router-dom';
import { List, Title, Item, MovieLink, Image } from './MovieList.styled';

export const MoviesList = ({ data }) => {

    const location = useLocation();

  return (
    <List>
      {data.map(movie => {
        console.log(movie);
        return (
          <Item key={movie.id}>
            <MovieLink
              to={
                location.pathname === '/movies'
                  ? `${movie.id}`
                  : `movies/${movie.id}`
              }
              state={{ from: location }}
            >
             {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  width="300"
                />
              ) : (
                <Image
                  src="https://cringemdb.com/img/movie-poster-placeholder.png"
                  alt="placeholder"
                  width="300"
                />
              )}
              <Title>{movie.title ? movie.title : movie.name}</Title>
            </MovieLink>
          </Item>
        );
      })}
    </List>
  );
};
