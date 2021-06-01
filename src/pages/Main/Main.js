import React from 'react';
import Nav from '../../components/Nav/Nav';
import Category from '../Category/Category';
import MainTop from '../MainTop/MainTop';
import Footer from '../../components/Footer/Footer';

function Main() {
  return (
    <>
      <Nav />
      <MainTop />
      <Category />
      <Footer />
    </>
  );
}

export default Main;
