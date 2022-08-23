import styled from 'styled-components';

export const Button = styled.button`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.accent : theme.colors.hoverBtn};

  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.accent};
  }
`;
