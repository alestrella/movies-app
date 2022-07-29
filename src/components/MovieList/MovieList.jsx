import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { IMG_URL } from 'services/moviesApi';
import Box from 'components/Box';
import { CardLink, CardTitle, Poster } from './MovieList.styled';
import noPoster from '../../images/noposter.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const date = new Date();

  return (
    <Box
      display="grid"
      gridGap={16}
      gridTemplateColumns="repeat(auto-fit, 200px)"
      as="ul"
    >
      {movies.map(
        ({ id, title, poster_path: poster, release_date: relDate }) => {
          return (
            <Box as="li" key={id}>
              <CardLink to={`/movies/${id}`} state={{ from: location }}>
                <Poster
                  src={poster ? `${IMG_URL}${poster}` : `${noPoster}`}
                  alt="Poster"
                />
                <CardTitle>
                  {title} • <span>{date.getUTCFullYear(relDate)}</span>
                </CardTitle>
              </CardLink>
            </Box>
          );
        }
      )}
    </Box>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
