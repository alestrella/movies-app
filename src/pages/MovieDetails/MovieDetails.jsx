import PropTypes from 'prop-types';
import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { IMG_URL, fetchMovie } from 'services/moviesApi';
import {
  Heading,
  Span,
  SubHeading,
  Text,
  Title,
} from 'components/Text/Text.styled';
import Box from 'components/Box';
import { BackBtn, AddLink } from './MovieDetails.styled';
import { FiArrowLeft } from 'react-icons/fi';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const date = new Date();

  console.log(location);

  useEffect(() => {
    fetchMovie(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const { title, poster_path, release_date, vote_average, overview, genres } =
    movie;

  return (
    <main>
      <Box display="grid" gridTemplateColumns="80px 1fr" as="section">
        <Title>Movie info</Title>

        {movie && (
          <Box>
            <BackBtn
              type="button"
              onClick={() => navigate(location?.state?.from ?? '/')}
            >
              <FiArrowLeft />
              Go back
            </BackBtn>
            <Box display="flex" py={4}>
              <img
                src={`${IMG_URL}${poster_path}`}
                alt="Movie poster"
                width="350px"
              />
              <Box px={6}>
                <Heading>
                  {title} •<Span> {date.getUTCFullYear(release_date)}</Span>
                </Heading>
                <Box py={4}>
                  <Text>
                    User Score: <Span>{Math.round(vote_average * 10)}%</Span>
                  </Text>
                </Box>
                <Box py={4} borderTop="normal" borderColor="bgBtn">
                  <SubHeading>Overview</SubHeading>
                  <Text>{overview}</Text>
                </Box>
                <Box py={4} borderTop="normal" borderColor="bgBtn">
                  <SubHeading>Genres</SubHeading>
                  <Text>
                    {genres.map(({ id, name }) => (
                      <span key={id}>{name} </span>
                    ))}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              py={4}
              borderTop="normal"
              borderBottom="normal"
              borderColor="bgBtn"
            >
              <SubHeading>Additional information</SubHeading>
              <Box display="flex" as="ul">
                <Box mr={4} as="li">
                  <AddLink to="cast" state={{ from: location.state.from }}>
                    Cast
                  </AddLink>
                </Box>
                <Box as="li">
                  <AddLink to="reviews" state={{ from: location.state.from }}>
                    Reviews
                  </AddLink>
                </Box>
              </Box>
            </Box>
            <Suspense fallback={<SubHeading>Loading...</SubHeading>}>
              <Outlet />
            </Suspense>
          </Box>
        )}
      </Box>
    </main>
  );
};
export default MovieDetails;

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string,
    genres: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
