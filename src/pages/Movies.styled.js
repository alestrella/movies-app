import styled from 'styled-components';

export const Input = styled.input`
  padding: ${p => p.theme.space[3]}px;
  width: 60%;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.bgInput};
  border: ${p => p.theme.borders.none};
`;
