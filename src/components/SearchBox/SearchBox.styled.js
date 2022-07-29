import styled from 'styled-components';

export const Input = styled.input`
  padding: ${p => p.theme.space[3]}px;
  width: 50%;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.bgInput};
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.none};

  :hover,
  :focus-visible {
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  color: #000;
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.hoverBtn};
  border: ${p => p.theme.borders.normal} transparent;

  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.accent};
  }
`;
