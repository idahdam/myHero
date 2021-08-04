import React from "react";
import "./index.css";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import ojk from "../../assets/section-one-hero/ojk.png";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-main-row">
          <div className="footer-main-column footer-main-left">
            <div className="footer-left-column-container">
              <div className="footer-left-column-title">
                my<span className="footer-left-column-title-red">hero</span>
              </div>
              <div className="footer-left-column-company">
                <div className="footer-left-column-company-name">
                  PT. Henan Putihrai Asset Management
                </div>
                <br />
                <div className="footer-left-column-company-addr">
                  Tamara Center, 7th Floor <br />
                  Jl. Jend Sudirman Kav 24, Jakarta
                </div>
                <div className="footer-left-column-controlledby">
                  Terdaftar dan diawasi oleh
                </div>
                <div>
                  <img src={ojk} alt="ojk" className="ojk" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-main-column footer-main-right">
            <div className="footer-right-column-container">
              <div className="footer-right-column-row">
                <div className="footer-right-column-column">
                  <div className="footer-right-column-each-title">
                    Informasi
                  </div>
                  <div>
                    <div className="footer-right-column-each-content">
                      Tentang Kami
                    </div>
                    <div className="footer-right-column-each-content">
                      Manajemen
                    </div>
                    <div className="footer-right-column-each-content">
                      Legal
                    </div>
                    <div className="footer-right-column-each-content">
                      Karir
                    </div>
                    <div className="footer-right-column-each-content">
                      Pengumuman
                    </div>
                  </div>
                </div>
                <div className="footer-right-column-column">
                  <div className="footer-right-column-each-title">Bantuan</div>
                  <div>
                    <div className="footer-right-column-each-content">
                      Syarat & Ketentuan
                    </div>
                    <div className="footer-right-column-each-content">
                      Kebijakan Privasi
                    </div>
                    <div className="footer-right-column-each-content">
                      Disclaimer
                    </div>
                    <div className="footer-right-column-each-content">
                      Hubungi Kami
                    </div>
                  </div>
                </div>
                <div className="footer-right-column-column">
                  <div className="footer-right-column-each-title">
                    Ikuti Kami
                  </div>
                  <div>
                    <div className="footer-right-column-social-row">
                      <div className="footer-right-column-social-column social-left">
                        <div className="footer-right-column-each-content">
                          <FaInstagram size={17} />
                        </div>
                        <div className="footer-right-column-each-content">
                          <FaLinkedinIn size={17} />
                        </div>
                        <div className="footer-right-column-each-content">
                          <FaYoutube size={17} />
                        </div>
                      </div>
                      <div className="footer-right-column-social-column social-right">
                        <div className="footer-right-column-each-content">
                          myhero.id
                        </div>
                        <div className="footer-right-column-each-content">
                          myhero
                        </div>
                        <div className="footer-right-column-each-content">
                          myhero
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
