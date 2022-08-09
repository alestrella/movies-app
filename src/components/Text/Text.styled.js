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

export const Heading = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  text-transform: capitalize;
  color: ${p => p.theme.colors.white};
  /* text-align: center; */
`;

export const SubHeading = styled.h3`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.subheading};
  text-transform: uppercase;
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.text};
`;

export const Span = styled.span`
  color: ${p => p.theme.colors.subheading};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Author = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.subheading};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
