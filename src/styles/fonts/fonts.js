import { createGlobalStyle } from 'styled-components';
import wellbeing from './잘풀리는오늘Medium.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: '잘풀리는오늘';
    src: url(${wellbeing}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
