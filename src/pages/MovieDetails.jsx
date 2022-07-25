import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';

const URL_IMG = 'https://image.tmdb.org/t/p/w500';

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
            <div>
              <img
                src={`${URL_IMG}${movie.backdrop_path}`}
                alt="Movie poster"
              />
              <h1>{movie.title}</h1>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres[0].name}</p>
            </div>
            <div>
              <h3>Additional information</h3>
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
