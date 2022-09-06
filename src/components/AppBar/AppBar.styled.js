import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]}px 0;
  gap: 12px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.hoverBtn}; ;
`;

export const LogoLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  text-decoration: none;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accent};

  :hover,
  :focus {
    opacity: 0.7;
  }
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

  :hover:not(.active),
  :focus-visible:not(.active) {
    border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
`;
