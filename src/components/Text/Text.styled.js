import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0 auto;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: capitalize;
  color: ${p => p.theme.colors.white};
  /* text-align: center; */
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

export const SubHeading = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.subheading};
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.text};
`;
