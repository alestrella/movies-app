import Box from 'components/Box';
import { Title } from 'components/Text/Text.styled';
import { Input } from './Movies.styled';

const Movies = () => {
  return (
    <main>
      <Box display="grid" gridTemplateColumns="80px 1fr" as="section">
        <Title>Search for movies</Title>
        <div>
          <Input placeholder="Search movies" />
        </div>
      </Box>
    </main>
  );
};
export default Movies;
