import React from "react";
import "./index.css";
import video from "../../../assets/section-three/video.png";

const SectionThree = () => {
  return (
    <>
      <div className="section-three-container">
        <div className="section-three-text-container">
          <div className="section-three-title">
            Jadilah <span className="section-three-title-red">hero</span> untuk
            masa depan!
          </div>
          <div className="section-three-desc">
            Nullam mollis sed magna et hendrerit. vsit amet ante iaculis eget
            urna egetfeugiat. Mauris laoreet odio ex. Quisque eget ex
          </div>
        </div>
        <div className="section-three-video-container">
          <img src={video} alt="video player" className="section-three-video" />
        </div>
      </div>
    </>
  );
};

export default SectionThree;
