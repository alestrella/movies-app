import { useLocation } from 'react-router-dom';
import Box from 'components/Box';
import { IMG_URL } from 'services/moviesApi';
import { CardLink, CardTitle, Poster } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box
      display="grid"
      gridGap={16}
      gridTemplateColumns="repeat(auto-fit, 250px)"
      as="ul"
    >
      {movies.map(({ id, title, poster_path: poster }) => {
        return (
          <li key={id}>
            <CardLink to={`/movies/${id}`} state={{ from: location }}>
              <Poster src={`${IMG_URL}${poster}`} alt="Poster" width="250px" />
              <CardTitle>{title}</CardTitle>
            </CardLink>
          </li>
        );
      })}
    </Box>
  );
};

export default MovieList;
