import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimpleSlider.css';

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      onClick={onClick}
    />
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      onClick={onClick}
    />
  );
};

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
    };

  const imgArr = [
      'https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/Flat20/BackUp/Dekstop1920x694.webp',
      'https://cdn.caratlane.com/media/static/images/V4/2024/CL/05_May/Banner/Extra/01/Desktop_1920x694.jpg',
      'https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/Banner/SolitaireBlog/Desktop.webp'
  ];

  return (
    <Slider {...settings}>
      {imgArr.map( (ele, i) => (
        <>
            <div>
                <img src={ele} alt={"Slide "+ (i+1)} />
            </div>
        </>

      ))}
    </Slider>
  );
};

export default SimpleSlider;
/*import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}*/
