import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[4]}px 0;
  gap: 12px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.hoverBtn}; ;
`;

export const Logo = styled.p`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.slim};
  color: ${p => p.theme.colors.accent};
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  &.active {
    color: ${p => p.theme.colors.white};
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }

  :hover {
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;
