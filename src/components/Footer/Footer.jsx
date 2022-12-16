import { LogoLink } from 'components/AppBar/AppBar.styled';
import Box from 'components/Box';
import { Text } from 'components/Text/Text.styled';
import { GitLink, StyledFooter } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooter>
      <Box display="flex" alignItems="center" m="0 auto">
        <Box mr={5}>
          <LogoLink to="/">MoviesApp</LogoLink>
        </Box>
        <Text>
          It was made with 💛 by{' '}
          <GitLink href="https://github.com/alestrella" target="_blank">
            Alestrella
          </GitLink>
        </Text>
      </Box>
    </StyledFooter>
  );
};
