import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.space[3]}px 0;
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.hoverBtn}; ;
`;

export const GitLink = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: uppercase;
  color: ${p => p.theme.colors.subheading};

  &:before {
    content: '';
    background-color: rgb(153 156 159 / 50%);
    position: absolute;
    left: 0;
    bottom: 3px;
    width: 100%;
    height: 6px;
    transition: all 0.3s ease-in-out;
  }

  :hover::before,
  :focus::before {
    bottom: 0;
    height: 100%;
  }
`;
