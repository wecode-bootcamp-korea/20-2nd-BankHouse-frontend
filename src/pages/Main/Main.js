import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <>
      <Hone>은행의집</Hone>
      <Blue>안녕하세요</Blue>
    </>
  );
}

export default Main;

const Hone = styled.h1`
  font-family: '잘풀리는오늘';
`;

const Blue = styled.div`
  background-color: ${props => props.theme.mainBlue};
`;
