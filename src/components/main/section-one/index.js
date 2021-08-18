/**
 * react-carousel docs: https://patricktran.github.io/react-magic-slider-dots/
 */

import React, { useState } from "react";
import "./index.css";
// import investordaily from "../../../assets/section-one-hero/investordaily.png";
import forbes from "../../../assets/section-one-hero/forbes.png";
import techinasia from "../../../assets/section-one-hero/techinasia.png";
import cnbc from "../../../assets/section-one-hero/cnbc.png";
import kompas from "../../../assets/section-one-hero/kompas.png";
import SectionOneCarousel from "./carousel";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";

const SectionOne = () => {
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);

  // Settings for carousel/sliders
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    },
  };

  return (
    <>
      <div className="section-one-hero-container">
        <div className="section-one-hero-carousel">
          <Slider {...settings}>
            <SectionOneCarousel />
            <SectionOneCarousel />
            <SectionOneCarousel />
            <SectionOneCarousel />
          </Slider>
        </div>
        <div className="section-one-hero-reviewed">
          {button ? null : (
            <div className="section-one-hero-covered-by-mobile">
              Telah Diliput Oleh
            </div>
          )}
          <div className="section-one-hero-reviewed-row">
            {button ? (
              <div className="section-one-hero-reviewed-column">
                <div className="section-one-hero-covered-by">
                  Telah Diliput Oleh
                </div>
              </div>
            ) : null}
            <div className="section-one-hero-reviewed-column">
              {" "}
              <img
                src={forbes}
                alt="reviewer"
                className="section-one-reviewer-image"
              />
            </div>
            <div className="section-one-hero-reviewed-column">
              <img
                src={techinasia}
                alt="reviewer"
                className="section-one-reviewer-image"
              />
            </div>
            <div className="section-one-hero-reviewed-column">
              <img
                src={cnbc}
                alt="reviewer"
                className="section-one-reviewer-image"
              />
            </div>
            <div className="section-one-hero-reviewed-column">
              <img
                src={kompas}
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
