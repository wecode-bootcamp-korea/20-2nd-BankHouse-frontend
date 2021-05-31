import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', showButton);
    return () => window.removeEventListener('scroll', showButton);
  }, []);

  const showButton = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrolltoTop = () => {
    document.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {isVisible && (
        <GoToTopBtn onClick={scrolltoTop}>
          <i className="fas fa-chevron-up"></i>
        </GoToTopBtn>
      )}
    </>
  );
}

const GoToTopBtn = styled.button`
  position: fixed;
  right: 30px;
  bottom: 45px;
  width: 40px;
  height: 40px;
  background: 'red';
  color: #030303;
  font-size: 20px;
  text-align: center;
  line-height: 46px;
  border: 1px solid #dbdddf;
  z-index: 2;

  &:hover {
    background: rgb(241, 243, 245);
  }

  i {
    display: flex;
    justify-content: center;
  }
`;
