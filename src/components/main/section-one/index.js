import React from "react";
import "./index.css";
import playstore from "../../../assets/section-one-hero/google-playstore.png";
import appstore from "../../../assets/section-one-hero/apple-appstore.png";
import ojk from "../../../assets/section-one-hero/ojk.png";
import idx from "../../../assets/section-one-hero/idx.png";

const SectionOne = () => {
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
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
