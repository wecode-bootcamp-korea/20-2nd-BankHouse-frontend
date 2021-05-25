import React from 'react';
import Nav from '../../components/Nav/Nav';
import Category from '../Category/Category';
import MainTop from '../MainTop/MainTop';
import styled from 'styled-components';

function Main() {
  return (
    <>
      <Nav />
      <MainTop />
      <Category />
    </>
  );
}

export default Main;

const Hone = styled.h1`
  font-family: '잘풀리는오늘';
`;
