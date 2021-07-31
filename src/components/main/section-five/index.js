import React from "react";
import "./index.css";
import review1 from "../../../assets/section-five/review-1.png";
import review2 from "../../../assets/section-five/review-2.png";
import review3 from "../../../assets/section-five/review-3.png";

const SectionFive = () => {
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
      <div className="section-five-reviews">
        <div className="section-five-reviews-row">
          <div className="section-five-reviews-column">
            <div>
              <img
                src={review1}
                alt="review"
                className="section-five-review-image"
              />
            </div>
            <div className="section-five-review-text">
              Nullam mollis sed magna et hendrerit. vsit amet ante iaculis eget
              urna egetfeugiat.
            </div>
            <div className="section-five-review-person">
              John Doe, Wiraswasta
            </div>
          </div>
          <div className="section-five-reviews-column">
            <div>
              <img
                src={review2}
                alt="review"
                className="section-five-review-image"
              />
            </div>
            <div className="section-five-review-text">
              Nullam mollis sed magna et hendrerit. vsit amet ante iaculis eget
              urna egetfeugiat.
            </div>
            <div className="section-five-review-person">Alex, Wiraswasta</div>
          </div>
          <div className="section-five-reviews-column">
            <div>
              <img
                src={review3}
                alt="review"
                className="section-five-review-image"
              />
            </div>
            <div className="section-five-review-text">
              Nullam mollis sed magna et hendrerit. vsit amet ante iaculis eget
              urna egetfeugiat.
            </div>
            <div className="section-five-review-person">
              JAnastasia, Wiraswasta
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
