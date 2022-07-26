import PropTypes from 'prop-types';
import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { IMG_URL, fetchMovie, fetchMovieVideo } from 'services/moviesApi';
import {
  Heading,
  Span,
  SubHeading,
  Text,
  Title,
} from 'components/Text/Text.styled';
import Box from 'components/Box';
import {
  BackBtn,
  AddLink,
  FullPoster,
  TrailerBtn,
  GenresItem,
} from './MovieDetails.styled';
import {
  MdArrowBack,
  MdPeopleAlt,
  MdOutlineRateReview,
  MdOutlineSmartDisplay,
} from 'react-icons/md';
import { Loader } from 'components/Loader/Loader';
import { ModalTrailer } from 'components/ModalTrailer/ModatTrailer';
import noPoster from '../../assets/noposter.jpg';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [trailer, setTrailer] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(state => !state);

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(movieId).then(setMovie);
    fetchMovieVideo(movieId).then(videos =>
      videos.forEach(v => {
        if (v.type === 'Trailer') {
          const trailerLink = `https://www.youtube.com/embed/${v.key}`;
          setTrailer(trailerLink);
        }
      })
    );
  }, [movieId]);

  if (movie === undefined) {
    return;
  }
  if (movie === null) {
    return <Navigate to="/not-found" replace={true} />;
  }

  const {
    title,
    poster_path,
    release_date: relDate,
    vote_average,
    overview,
    genres,
  } = movie;

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
              <MdArrowBack style={{ marginRight: 8 }} />
              Go back
            </BackBtn>
            <Box display="flex" py={4}>
              <FullPoster
                src={poster_path ? `${IMG_URL}${poster_path}` : `${noPoster}`}
                alt="Movie poster"
              />
              <Box px={6}>
                <Heading>
                  {title} •
                  <Span> {relDate ? relDate.substr(0, 4) : 'No date'}</Span>
                </Heading>

                {trailer && (
                  <TrailerBtn onClick={toggleModal}>
                    <MdOutlineSmartDisplay style={{ marginRight: 8 }} />
                    Trailer
                  </TrailerBtn>
                )}
                {openModal && (
                  <ModalTrailer onClose={toggleModal} video={trailer} />
                )}

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
                  <Box display="flex" flexWrap="wrap" gridGap={3}>
                    {genres.map(({ id, name }) => (
                      <GenresItem key={id}>{name} </GenresItem>
                    ))}
                  </Box>
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
                    <MdPeopleAlt style={{ marginRight: 8 }} /> Cast
                  </AddLink>
                </Box>
                <Box as="li">
                  <AddLink to="reviews" state={{ from: location.state?.from }}>
                    <MdOutlineRateReview style={{ marginRight: 8 }} /> Reviews
                  </AddLink>
                </Box>
              </Box>
            </Box>
            <Suspense fallback={<Loader />}>
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
