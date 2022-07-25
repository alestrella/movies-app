import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/moviesApi';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(setTrendMovies);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendMovies &&
          trendMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default Home;
