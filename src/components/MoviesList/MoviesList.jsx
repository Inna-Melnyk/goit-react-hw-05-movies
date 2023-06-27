import { List, Title, Item, MovieLink, Image } from './MovieList.styled';

export const MoviesList = ({ data, locationState }) => {

  return (
    <List>
      {data.map(movie => {
        console.log(movie);
        return (
          <Item key={movie.id}>
            <MovieLink to={`movies/${movie.id}`} state={locationState}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
                width="300"
              />
              <Title>{movie.title ? movie.title : movie.name}</Title>
            </MovieLink> 
          </Item>
        );
      })}
    </List>
  );
};
