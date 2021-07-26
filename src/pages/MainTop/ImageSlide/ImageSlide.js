import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 1000,
};

function ImageSlide() {
  const [slideDatas, setSlideDatas] = useState();

  useEffect(() => {
    fetch('/data/SlideData.json')
      .then(res => res.json())
      .then(data => {
        setSlideDatas(data.imgUrls);
      });
  }, []);

  return slideDatas ? (
    <StyledSlider {...settings}>
      {slideDatas.map((slideData, index) => {
        return <StoryBanner alt="slide image" src={slideData} key={index} />;
      })}
    </StyledSlider>
  ) : null;
}

export default ImageSlide;

const StyledSlider = styled(Slider)`
  .slick-slider {
    position: relative;
    overflow: hidden;
  }

  .slick-prev {
    position: absolute;
    opacity: 1;
    left: 30px;
    bottom: -262px;
    color: #f5f5f5;
    z-index: 5;
  }

  .slick-prev:before {
    position: absolute;
    opacity: 1;
    left: -20px;
    bottom: -262px;
    color: #f5f5f5;
    z-index: 5;
  }

  .slick-next {
    position: absolute;
    opacity: 1;
    right: 5px;
    bottom: -262px;
    color: #f5f5f5;
    z-index: 5;
  }

  .slick-next:before {
    position: absolute;
    opacity: 1;
    right: 5px;
    bottom: -262px;
    color: #f5f5f5;
    z-index: 5;
  }

  ul.slick-dots {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    color: white;
  }
  .slick-dots li.slick-active button:before {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    color: white;
  }

  .slick-dots li button:before {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    color: white;
  }
`;

const StoryBanner = styled.img`
  width: 269px;
  height: 565px;
  border-radius: 5px;
  object-fit: cover;
`;
