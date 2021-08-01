import React from "react";
import "./index.css";
import playstore from "../../../../assets/section-one-hero/google-playstore.png";
import appstore from "../../../../assets/section-one-hero/apple-appstore.png";
import ojk from "../../../../assets/section-one-hero/ojk.png";
import idx from "../../../../assets/section-one-hero/idx.png";
import mockup from "../../../../assets/section-one-hero/mockup.png";

const SectionOneCarousel = () => {
  return (
    <div className="section-one-hero-row">
      <div className="section-one-hero-column">
        <div className="section-one-hero-maintext">
          Lorem Ipsum <br />
          Dolor it{" "}
          <span className="section-one-hero-maintext-red">Summit!</span>
        </div>
        <div className="section-one-hero-description">
          Nullam mollis sed magna et hendrerit. sit amet ante iaculis eget urna
          egetfeugiat. Mauris laoreet odio ex. Quisque eget ex
        </div>
        <div>
          <a href="http://google.com" target="_blank" rel="noreferrer">
            <img src={playstore} alt="playstore" className="playstore" />
          </a>
          <a href="http://google.com" target="_blank" rel="noreferrer">
            <img src={appstore} alt="appstore" className="appstore" />
          </a>
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
  );
};

export default SectionOneCarousel;
