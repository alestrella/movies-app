import Box from 'components/Box';
import { Header, Link, LogoLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <LogoLink to="/">MoviesApp</LogoLink>
      <Box as="nav">
        <Box display="flex" as="ul">
          <Box mr={4} as="li">
            <Link to="/">Home</Link>
          </Box>
          <Box as="li">
            <Link to="/movies">Movies</Link>
          </Box>
        </Box>
      </Box>
    </Header>
  );
};
