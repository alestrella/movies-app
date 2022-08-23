import { useState, useEffect } from 'react';
import { fetchTrendingMovies, fetchMovieByGenre } from 'services/moviesApi';
import Box from 'components/Box';
import GenresFilter from 'components/GenresFilter/GenresFilter';
import MovieList from 'components/MovieList/MovieList';
import { Title } from 'components/Text/Text.styled';
import { useSearchParams, useLocation } from 'react-router-dom';

const Home = () => {
  const [visibleMovies, setVisibleMovies] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies().then(setVisibleMovies);
  }, []);

  useEffect(() => {
    const genre = searchParams.get('genre');
    if (genre) {
      fetchMovieByGenre(selectedGenre.join(',')).then(setVisibleMovies);
    }

    console.log('selectedGenre :>> ', selectedGenre);
  }, [searchParams, selectedGenre, setSearchParams]);

  const handleSelectedGenre = ({ name }) => {
    setSelectedGenre(selectedGenre => [...selectedGenre, name]);
    setSearchParams({ genre: selectedGenre });
  };

  return (
    <main>
      <Box display="grid" gridTemplateColumns="80px 1fr" as="section">
        <Title>Trending movies</Title>
        <Box display="grid">
          <GenresFilter active={selectedGenre} onClick={handleSelectedGenre} />
          {visibleMovies && (
            <MovieList movies={visibleMovies} state={{ from: location }} />
          )}
        </Box>
      </Box>
    </main>
  );
};
export default Home;
