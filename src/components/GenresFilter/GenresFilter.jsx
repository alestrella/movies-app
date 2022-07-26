import PropTypes from 'prop-types';
import Box from 'components/Box';
import { useEffect, useState } from 'react';
import { fetchGenres } from 'services/moviesApi';
import { Button } from './GenresFilter.styled';
import { SubHeading } from 'components/Text/Text.styled';

const GenresFilter = ({ active, onClick }) => {
  const [genres, setGenres] = useState(null);
  const genreName = active.map(({ name }) => name);

  useEffect(() => {
    fetchGenres().then(setGenres);
  }, []);

  return (
    <Box m="0 auto" pb={4} px={3} textAlign="center">
      <SubHeading>What are you in the mood for?</SubHeading>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        mb={5}
        maxWidth="830px"
        as="ul"
      >
        {genres?.map(genre => {
          const currentGenre = genreName.includes(genre.name);
          return (
            <Box m={2} as="li" key={genre.id}>
              <Button
                type="button"
                active={currentGenre}
                onClick={() => onClick(genre)}
              >
                {genre.name}
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default GenresFilter;

GenresFilter.propTypes = {
  active: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
