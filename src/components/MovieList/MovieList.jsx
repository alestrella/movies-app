import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { IMG_URL } from 'services/moviesApi';
import Box from 'components/Box';
import { CardLink, CardTitle, Poster, Vote } from './MovieList.styled';
import noPoster from '../../assets/noposter.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Box
      display="grid"
      gridGap={20}
      justifyContent="center"
      gridTemplateColumns="repeat(auto-fit, 200px)"
      as="ul"
    >
      {movies.map(
        ({
          id,
          title,
          poster_path: poster,
          release_date: relDate,
          vote_average: vote,
        }) => {
          return (
            <Box as="li" key={id}>
              <CardLink to={`/movies/${id}`} state={{ from: location }}>
                <Poster
                  src={poster ? `${IMG_URL}${poster}` : `${noPoster}`}
                  alt="Poster"
                />
                <Box display="grid" gridTemplateColumns="1fr 20%">
                  <CardTitle>
                    {title} •{' '}
                    <span>{relDate ? relDate.substr(0, 4) : 'No date'}</span>
                  </CardTitle>
                  <Vote>{vote.toFixed(1)}</Vote>
                </Box>
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
      release_date: PropTypes.string,
    }).isRequired
  ).isRequired,
};
