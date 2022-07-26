import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Poster = styled.img`
  margin-bottom: ${p => p.theme.space[3]}px;
  width: 250px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const CardTitle = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.text};
`;

export const CardLink = styled(Link)`
  display: block;
  height: 100%;

  :hover ${Poster} {
    box-shadow: 0px 10px 5px 0px rgba(251, 197, 0, 0.2);
  }
  :hover ${CardTitle} {
    color: ${p => p.theme.colors.accent};
  }
`;
