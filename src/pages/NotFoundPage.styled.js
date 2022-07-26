import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: inline-block;
  margin-top: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  color: #000;
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.accent};
`;
