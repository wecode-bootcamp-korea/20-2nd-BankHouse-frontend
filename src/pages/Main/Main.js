import React from 'react';
import Nav from '../../components/Nav/Nav';
import Category from '../Category/Category';
import MainTop from '../MainTop/MainTop';
import Footer from '../../components/Footer/Footer';
import GoToTop from '../../components/GoToTop/GoToTop';

function Main() {
  return (
    <>
      <Nav />
      <MainTop />
      <Category />
      <Footer />
      <GoToTop />
    </>
  );
}

export default Main;
