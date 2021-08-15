import React, { useState } from "react";
import "./index.css";
import mockup from "../../../assets/section-four/mockup.png";
import { Link } from "react-router-dom";
const SectionFour = () => {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);

  const openStepOneOnly = () => {
    setStepOne(true);
    setStepTwo(false);
    setStepThree(false);
  };

  const openStepTwoOnly = () => {
    setStepOne(false);
    setStepTwo(true);
    setStepThree(false);
  };

  const openStepThreeOnly = () => {
    setStepOne(false);
    setStepTwo(false);
    setStepThree(true);
  };

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

  return (
    <>
      {button ? (
        <div className="section-four-container">
          <div className="section-four-row">
            <div className="section-four-column four-left">
              <div className="section-four-image-container">
                <img src={mockup} alt="mockup" className="section-four-image" />
              </div>
            </div>
            <div className="section-four-column four-right">
              <div className="section-four-title">
                Journey with my
                <span className="section-four-title-red">hero!</span>
              </div>
              <div className="section-four-steps-row">
                <div className="section-four-steps-column steps-left">
                  <div className="section-four-steps-container">
                    <div
                      className={
                        stepOne
                          ? "section-four-step-opened"
                          : "section-four-step-closed"
                      }
                      onClick={() => openStepOneOnly()}
                    >
                      <div
                        className={
                          stepOne
                            ? "section-four-step-title-opened"
                            : "section-four-step-title-closed"
                        }
                      >
                        Step One
                      </div>
                      {stepOne ? (
                        <>
                          <div className="section-four-step-content-row">
                            <div className="section-four-step-content-column step-content-left">
                              <div className="section-four-step-description">
                                Nullam mollis sed magna et hendrerit. sit amet
                                ante iaculis eget urna egetfeugiat.
                              </div>
                            </div>
                            <div className="section-four-step-content-column step-content-right">
                              <Link
                                to="/"
                                className="section-four-step-content-button"
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                    <div
                      className={
                        stepTwo
                          ? "section-four-step-opened"
                          : "section-four-step-closed"
                      }
                      onClick={() => openStepTwoOnly()}
                    >
                      <div
                        className={
                          stepTwo
                            ? "section-four-step-title-opened"
                            : "section-four-step-title-closed"
                        }
                      >
                        Step Two
                      </div>
                      {stepTwo ? (
                        <>
                          <div className="section-four-step-content-row">
                            <div className="section-four-step-content-column step-content-left">
                              <div className="section-four-step-description">
                                Nullam mollis sed magna et hendrerit. sit amet
                                ante iaculis eget urna egetfeugiat.
                              </div>
                            </div>
                            <div className="section-four-step-content-column step-content-right">
                              <Link
                                to="/"
                                className="section-four-step-content-button"
                              >
                                Learn more
                              </Link>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                    <div
                      className={
                        stepThree
                          ? "section-four-step-opened"
                          : "section-four-step-closed"
                      }
                      onClick={() => openStepThreeOnly()}
                    >
                      <div
                        className={
                          stepThree
                            ? "section-four-step-title-opened"
                            : "section-four-step-title-closed"
                        }
                      >
                        Last Step
                      </div>
                      {stepThree ? (
                        <>
                          <div className="section-four-step-content-row">
                            <div className="section-four-step-content-column step-content-left">
                              <div className="section-four-step-description">
                                Nullam mollis sed magna et hendrerit. sit amet
                                ante iaculis eget urna egetfeugiat.
                              </div>
                            </div>
                            <div className="section-four-step-content-column step-content-right">
                              <Link
                                to="/"
                                className="section-four-step-content-button"
                              >
                                Learn more
                              </Link>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="section-four-steps-column steps-right">
                  <span className={stepOne ? "dot-large" : "dot"}></span>
                  <br />
                  <span className={stepTwo ? "dot-large" : "dot"}></span>
                  <br />
                  <span className={stepThree ? "dot-large" : "dot"}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="section-four-container">
          <div className="section-four-row">
            <div className="section-four-column">
              <div className="section-four-title">
                Journey with my
                <span className="section-four-title-red">hero!</span>
              </div>
              <div className="section-four-steps-row">
                <div className="section-four-steps-column steps-left">
                  <div className="section-four-steps-container">
                    <div
                      className={
                        stepOne
                          ? "section-four-step-opened"
                          : "section-four-step-closed"
                      }
                      onClick={() => openStepOneOnly()}
                    >
                      <div
                        className={
                          stepOne
                            ? "section-four-step-title-opened"
                            : "section-four-step-title-closed"
                        }
                      >
                        Step One
                      </div>
                      {stepOne ? (
                        <>
                          <div className="section-four-step-content-row">
                            <div className="section-four-step-content-column step-content-left">
                              <div className="section-four-step-description">
                                Nullam mollis sed magna et hendrerit. sit amet
                                ante iaculis eget urna egetfeugiat.
                              </div>
                            </div>
                            <div className="section-four-step-content-column step-content-right">
                              <Link
                                to="/"
                                className="section-four-step-content-button"
                              >
                                Learn More
                              </Link>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                    <div
                      className={
                        stepTwo
                          ? "section-four-step-opened"
                          : "section-four-step-closed"
                      }
                      onClick={() => openStepTwoOnly()}
                    >
                      <div
                        className={
                          stepTwo
                            ? "section-four-step-title-opened"
                            : "section-four-step-title-closed"
                        }
                      >
                        Step Two
                      </div>
                      {stepTwo ? (
                        <>
                          <div className="section-four-step-content-row">
                            <div className="section-four-step-content-column step-content-left">
                              <div className="section-four-step-description">
                                Nullam mollis sed magna et hendrerit. sit amet
                                ante iaculis eget urna egetfeugiat.
                              </div>
                            </div>
                            <div className="section-four-step-content-column step-content-right">
                              <Link
                                to="/"
                                className="section-four-step-content-button"
                              >
                                Learn more
                              </Link>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                    <div
                      className={
                        stepThree
                          ? "section-four-step-opened"
                          : "section-four-step-closed"
                      }
                      onClick={() => openStepThreeOnly()}
                    >
                      <div
                        className={
                          stepThree
                            ? "section-four-step-title-opened"
                            : "section-four-step-title-closed"
                        }
                      >
                        Last Step
                      </div>
                      {stepThree ? (
                        <>
                          <div className="section-four-step-content-row">
                            <div className="section-four-step-content-column step-content-left">
                              <div className="section-four-step-description">
                                Nullam mollis sed magna et hendrerit. sit amet
                                ante iaculis eget urna egetfeugiat.
                              </div>
                            </div>
                            <div className="section-four-step-content-column step-content-right">
                              <Link
                                to="/"
                                className="section-four-step-content-button"
                              >
                                Learn more
                              </Link>
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="section-four-steps-column steps-right">
                  <span className={stepOne ? "dot-large" : "dot"}></span>
                  <br />
                  <span className={stepTwo ? "dot-large" : "dot"}></span>
                  <br />
                  <span className={stepThree ? "dot-large" : "dot"}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionFour;
