import PropTypes from 'prop-types';
import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { IMG_URL, fetchMovie } from 'services/moviesApi';
import {
  Heading,
  Span,
  SubHeading,
  Text,
  Title,
} from 'components/Text/Text.styled';
import Box from 'components/Box';
import { BackBtn, AddLink, FullPoster } from './MovieDetails.styled';
import { MdArrowBack, MdPeopleAlt, MdOutlineRateReview } from 'react-icons/md';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(movieId).then(setMovie);
  }, [movieId]);

  if (movie === undefined) {
    return;
  }
  if (movie === null) {
    return <Navigate to="/not-found" replace={true} />;
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
              <MdArrowBack />
              Go back
            </BackBtn>
            <Box display="flex" py={4}>
              <FullPoster src={`${IMG_URL}${poster_path}`} alt="Movie poster" />
              <Box px={6}>
                <Heading>
                  {title} •<Span> {release_date.substr(0, 4)}</Span>
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
                  <AddLink to="cast" state={{ from: location.state?.from }}>
                    <MdPeopleAlt /> Cast
                  </AddLink>
                </Box>
                <Box as="li">
                  <AddLink to="reviews" state={{ from: location.state?.from }}>
                    <MdOutlineRateReview /> Reviews
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
