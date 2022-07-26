import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { IMG_URL } from 'services/moviesApi';
import { SubHeading, Text, Title } from 'components/Text/Text.styled';
import Box from 'components/Box';

const MovieDetails = () => {
  const movie = useFetchMovie();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      {movie && (
        <main>
          <button
            type="button"
            onClick={() => navigate(location?.state?.from ?? '/')}
          >
            Go back
          </button>
          <section>
            <Box display="flex">
              <img
                src={`${IMG_URL}${movie.poster_path}`}
                alt="Movie poster"
                width="350px"
              />
              <div>
                <Title>{movie.title}</Title>
                <Text>User Score: {Math.round(movie.vote_average * 10)}%</Text>
                <SubHeading>Overview</SubHeading>
                <Text>{movie.overview}</Text>
                <SubHeading>Genres</SubHeading>
                <Text>{movie.genres[0].name}</Text>
              </div>
            </Box>
            <div>
              <SubHeading>Additional information</SubHeading>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
              <Outlet />
            </div>
          </section>
        </main>
      )}
    </>
  );
};
export default MovieDetails;
