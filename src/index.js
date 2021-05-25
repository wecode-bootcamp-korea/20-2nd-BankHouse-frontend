import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import GlobalFonts from './styles/fonts/fonts';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Routes from './Routes';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles />
      <GlobalFonts />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
