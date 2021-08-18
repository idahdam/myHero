import React from "react";
import SectionFiveCarousel from "./carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import "./index.css";

const SectionFive = () => {
  // Settings for sliders/carousel
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={2} dotWidth={30} />;
    },
  };

  return (
    <div className="section-five-container">
      <div className="section-five-text-container">
        <div className="section-five-title">
          Apa kata <span className="section-five-title-red">mereka?</span>
        </div>
        <div className="section-five-desc">
          Nullam mollis sed magna et hendrerit. vsit amet ante iaculis eget urna
          egetfeugiat. Mauris laoreet odio ex. Quisque eget ex
        </div>
      </div>
      <Slider {...settings}>
        <SectionFiveCarousel />
        <SectionFiveCarousel />
      </Slider>
    </div>
  );
};

export default SectionFive;
