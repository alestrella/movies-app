import PropTypes from 'prop-types';
import { Button, Input } from './SearchBox.styled';
import { BiSearch } from 'react-icons/bi';
import Box from 'components/Box';

const SearchBox = ({ onSubmit }) => {
  return (
    <Box mb={5} textAlign="center" as="form" onSubmit={onSubmit}>
      <Input name="query" autoComplete="off" placeholder="Search movies" />
      <Button type="submit">
        <BiSearch />
      </Button>
    </Box>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
