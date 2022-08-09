import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
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

export const AddLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.bgBtn};
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.bgBtn};

  &.active {
    color: ${p => p.theme.colors.white};
    border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;

export const FullPoster = styled.img`
  width: 350px;
  border-radius: ${p => p.theme.radii.normal};
`;
