import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}
html, body {
  margin: 0;
  height: 100vh;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${p => p.theme.colors.bg};
}
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}
img{
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyles;
