import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import GlobalFonts from './styles/fonts/fonts';
import Routes from './Routes';

ReactDOM.render(
  <>
    <GlobalStyles />
    <GlobalFonts />
    <Routes />
  </>,
  document.getElementById('root')
);
