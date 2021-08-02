import React from "react";
import "./index.css";
import mockup from "../../../assets/section-four/mockup.png";
const SectionFour = () => {
  return (
    <>
      <div className="section-four-container">
        <div className="section-four-row">
          <div className="section-four-column four-left">
            <div className="section-four-image-container">
              <img src={mockup} alt="mockup" className="section-four-image" />
            </div>
          </div>
          <div className="section-four-column four-right"></div>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
