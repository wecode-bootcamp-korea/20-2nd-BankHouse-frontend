import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&display=swap');
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

    a {
    text-decoration: none;
    color: inherit;
  }

    li {
    list-style: none;
  }

    button,
  input {
    border: none;
    outline: none;
    background-color: transparent;
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyles;
