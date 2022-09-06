import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.hoverBtn};
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.normal};

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

export const TrailerBtn = styled.a`
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${p => p.theme.space[3]}px;
  width: 100px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  background-color: ${p => p.theme.colors.bgBtn};
  border: ${p => p.theme.borders.normal} transparent;
  border-radius: ${p => p.theme.radii.normal};

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.hoverBtn};
  }
`;

export const GenresItem = styled.span`
  margin-right: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.text};
  border: 2px solid ${p => p.theme.colors.hoverBtn};
  border-radius: 20px;
`;
