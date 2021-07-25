import { css } from 'styled-components';

export const flexSet = (justify = 'center', align = 'center') => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const mediaQuery = {
  BREAK_POINT_MOBILE: 760,
  BREAK_POINT_TABLET: 1020,
};
