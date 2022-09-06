import { useState, useEffect } from 'react';
import { fetchTrendingMovies, fetchMovieByGenre } from 'services/moviesApi';
import Box from 'components/Box';
import GenresFilter from 'components/GenresFilter/GenresFilter';
import MovieList from 'components/MovieList/MovieList';
import { Title } from 'components/Text/Text.styled';

const Home = () => {
  const [visibleMovies, setVisibleMovies] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setVisibleMovies);
  }, []);

  useEffect(() => {
    const genresId = selectedGenre.map(({ id }) => id.toString());

    fetchMovieByGenre(genresId).then(setVisibleMovies);
  }, [selectedGenre]);

  const handleSelectedGenre = genre => {
    const { name } = genre;
    const selectedGenreName = selectedGenre.map(({ name }) => name);

    if (selectedGenreName.includes(name)) {
      const newSelectedGenre = selectedGenre.filter(
        genre => genre.name !== name
      );
      setSelectedGenre(newSelectedGenre);
      return;
    }

    setSelectedGenre(selectedGenre => [...selectedGenre, genre]);
  };

  return (
    <main>
      <Box display="grid" gridTemplateColumns="100px 1fr" as="section">
        <Title>Trending movies</Title>
        <Box display="grid">
          <GenresFilter active={selectedGenre} onClick={handleSelectedGenre} />
          {visibleMovies && <MovieList movies={visibleMovies} />}
        </Box>
      </Box>
    </main>
  );
};
export default Home;
