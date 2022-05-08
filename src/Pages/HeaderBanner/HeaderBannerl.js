import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import HeadBanner1 from '../../images/carosel-1.jpg'
import HeadBanner2 from '../../images/carosel-2.jpg'
import HeadBanner3 from '../../images/carosel-3.jpg'


const HeaderBanner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeadBanner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Know All Stock</h3>
          <p>In this website you will see your stock.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeadBanner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Noted Down!</h3>
          <p>Note is an imported things to remind your everything.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HeadBanner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Analys Your Data</h3>
          <p>
            Its Simple You Know!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderBanner;