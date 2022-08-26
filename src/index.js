import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlobalStyles from 'components/GlobalStyles';
import { IconContext } from 'react-icons';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/movies-app/">
      <ThemeProvider theme={theme}>
        <IconContext.Provider value={{ style: { marginRight: '8px' } }}>
          <GlobalStyles />
          <App />
        </IconContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
