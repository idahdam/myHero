import React, { useState } from "react";
import SectionFiveCarousel from "./carousel";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "./index.css";

const SectionFive = () => {
  const [value, setValue] = useState(0);
  const [slides] = useState([<SectionFiveCarousel />, <SectionFiveCarousel />]);

  const onChangeCarousel = (value) => {
    setValue(value);
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
      <Carousel value={value} slides={slides} onChange={onChangeCarousel} />
      <Dots value={value} onChange={onChangeCarousel} number={slides.length} />
    </div>
  );
};

export default SectionFive;
