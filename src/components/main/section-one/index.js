/**
 * react-carousel docs: https://brainhubeu.github.io/react-carousel/docs/gettingStarted
 */

import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./index.css";
import image1 from "../../../assets/section-one-hero/carousel-1.png";
import image2 from "../../../assets/section-one-hero/carousel-2.png";
import image3 from "../../../assets/section-one-hero/carousel-3.png";
import image4 from "../../../assets/section-one-hero/carousel-4.png";
import image5 from "../../../assets/section-one-hero/carousel-5.png";
import SectionOneCarousel from "./carousel";

const SectionOne = () => {
  const [value, setValue] = useState(0);
  const [slides] = useState([
    <SectionOneCarousel />,
    <SectionOneCarousel />,
    <SectionOneCarousel />,
    <SectionOneCarousel />,
    <SectionOneCarousel />,
  ]);

  const onChangeCarousel = (value) => {
    setValue(value);
  };

  return (
    <>
      <div className="section-one-hero-container">
        <div className="section-one-hero-carousel">
          <Carousel value={value} slides={slides} onChange={onChangeCarousel} />
        </div>
        <Dots
          value={value}
          onChange={onChangeCarousel}
          number={slides.length}
        />
        <div className="section-one-hero-reviewed">
          <div className="section-one-hero-reviewed-row">
            <div className="section-one-hero-reviewed-column">
              <img
                src={image1}
                alt="reviewer"
                className="section-one-reviewer-image"
              />
            </div>
            <div className="section-one-hero-reviewed-column">
              {" "}
              <img
                src={image2}
                alt="reviewer"
                className="section-one-reviewer-image"
              />
            </div>
            <div className="section-one-hero-reviewed-column">
              <img
                src={image3}
                alt="reviewer"
                className="section-one-reviewer-image"
              />
            </div>
            <div className="section-one-hero-reviewed-column">
              <img
                src={image4}
                alt="reviewer"
                className="section-one-reviewer-image"
              />
            </div>
            <div className="section-one-hero-reviewed-column">
              <img
                src={image5}
                alt="reviewer"
                className="section-one-reviewer-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
