/**
 * react-carousel docs: https://brainhubeu.github.io/react-carousel/docs/gettingStarted
 */

import React, { useState } from "react";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./index.css";
import playstore from "../../../assets/section-one-hero/google-playstore.png";
import appstore from "../../../assets/section-one-hero/apple-appstore.png";
import ojk from "../../../assets/section-one-hero/ojk.png";
import idx from "../../../assets/section-one-hero/idx.png";
import mockup from "../../../assets/section-one-hero/mockup.png";
import carousel1 from "../../../assets/section-one-hero/carousel-1.png";
import carousel2 from "../../../assets/section-one-hero/carousel-2.png";
import carousel3 from "../../../assets/section-one-hero/carousel-3.png";
import carousel4 from "../../../assets/section-one-hero/carousel-4.png";
import carousel5 from "../../../assets/section-one-hero/carousel-5.png";

const SectionOne = () => {
  const [value, setValue] = useState(0);
  const [slides] = useState([
    <img
      src={carousel1}
      alt="carousel1"
      className="section-one-carousel-image"
    />,
    <img
      src={carousel2}
      alt="carousel2"
      className="section-one-carousel-image"
    />,
    <img
      src={carousel3}
      alt="carousel3"
      className="section-one-carousel-image"
    />,
    <img
      src={carousel4}
      alt="carousel4"
      className="section-one-carousel-image"
    />,
    <img
      src={carousel5}
      alt="carousel5"
      className="section-one-carousel-image"
    />,
  ]);

  const onChangeCarousel = (value) => {
    setValue(value);
  };

  return (
    <>
      <div className="section-one-hero-container">
        <div className="section-one-hero-row">
          <div className="section-one-hero-column">
            <div className="section-one-hero-maintext">
              Lorem Ipsum <br />
              Dolor it{" "}
              <span className="section-one-hero-maintext-red">Summit!</span>
            </div>
            <div className="section-one-hero-description">
              Nullam mollis sed magna et hendrerit. sit amet ante iaculis eget
              urna egetfeugiat. Mauris laoreet odio ex. Quisque eget ex
            </div>
            <div>
              <img src={playstore} alt="playstore" className="playstore" />
              <img src={appstore} alt="appstore" className="appstore" />
            </div>
            <div className="section-one-hero-controlledby">
              <br />
              Terdaftar dan diawasi oleh
            </div>
            <div>
              <img src={ojk} alt="ojk" className="ojk" />
              <img src={idx} alt="idx" className="idx" />
            </div>
          </div>
          <div className="section-one-hero-column">
            <div className="section-one-hero-mockup">
              <img src={mockup} alt="mockup" className="mockup" />
            </div>
          </div>
        </div>
        <div className="section-one-hero-carousel">
          <Dots
            value={value}
            onChange={onChangeCarousel}
            number={slides.length}
          />
          <Carousel
            plugins={[
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 5,
                },
              },
            ]}
            itemWidth={225}
            value={value}
            slides={slides}
            onChange={onChangeCarousel}
            number={slides.length}
          />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
