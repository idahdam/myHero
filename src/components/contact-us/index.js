import React from "react";
import "./index.css";
import img1 from "../../assets/contact-us/1.png";
import img2 from "../../assets/contact-us/2.png";
import img3 from "../../assets/contact-us/3.png";
import img4 from "../../assets/contact-us/4.png";

const ContactUs = () => {
  return (
    <>
      <div className="contactus-container">
        <ul className="contact-us-item-container">
          <li className="contact-us-item-list">
            <a href="http://google.com">
              <img
                src={img1}
                alt="contact us item"
                className="contact-us-item"
              />
            </a>
          </li>
          <li className="contact-us-item-list">
            <a href="http://google.com">
              <img
                src={img2}
                alt="contact us item"
                className="contact-us-item"
              />
            </a>
          </li>
          <li className="contact-us-item-list">
            <a href="http://google.com">
              <img
                src={img3}
                alt="contact us item"
                className="contact-us-item"
              />
            </a>
          </li>
          <li className="contact-us-item-list">
            <a href="http://google.com">
              <img
                src={img4}
                alt="contact us item"
                className="contact-us-item"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactUs;
