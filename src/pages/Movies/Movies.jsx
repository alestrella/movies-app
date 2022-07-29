import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/moviesApi';
import Box from 'components/Box';
import MovieList from 'components/MovieList/MovieList';
import { Title } from 'components/Text/Text.styled';
import SearchBox from 'components/SearchBox/SearchBox';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = e => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim().toLowerCase();

    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    const query = searchParams.get('query');

    if (query) {
      searchMovies(query).then(setMovies);
    }
  }, [searchParams]);

  return (
    <main>
      <Box display="grid" gridTemplateColumns="80px 1fr" as="section">
        <Title>Movies</Title>
        <div>
          <SearchBox onSubmit={handleSearch} />
          {movies.length > 0 && <MovieList movies={movies} />}
        </div>
      </Box>
    </main>
  );
};
export default Movies;
