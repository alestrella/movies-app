import Box from 'components/Box';
import MovieList from 'components/MovieList/MovieList';
import { Title } from 'components/Text/Text.styled';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/moviesApi';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(setTrendMovies);
  }, []);

  return (
    <main>
      <Box display="grid" gridTemplateColumns="80px 1fr" as="section">
        <Title>Trending today</Title>
        {trendMovies && <MovieList movies={trendMovies} />}
      </Box>
    </main>
  );
};
export default Home;
