/**
 * react-carousel docs: https://brainhubeu.github.io/react-carousel/docs/gettingStarted
 */

import React, { useState } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./index.css";
// import investordaily from "../../../assets/section-one-hero/investordaily.png";
import forbes from "../../../assets/section-one-hero/forbes.png";
import techinasia from "../../../assets/section-one-hero/techinasia.png";
import cnbc from "../../../assets/section-one-hero/cnbc.png";
import kompas from "../../../assets/section-one-hero/kompas.png";
import SectionOneCarousel from "./carousel";

const SectionOne = () => {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const handleClick = () => setClick(!click);
  // eslint-disable-next-line no-unused-vars
  const closeMobileMenu = () => setClick(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      console.log("mobie!");
    } else {
      setButton(true);
      console.log("desk!");
    }
  };
  window.addEventListener("resize", showButton);
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
          className="section-one-dots-carousel"
        />
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
