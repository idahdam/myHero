import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function NavBar() {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  // eslint-disable-next-line no-unused-vars
  const closeMobileMenu = () => setClick(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            my<span className="nav-logo-red">hero</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"} ibC>
            <li className="nav-item item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Promo
              </NavLink>
            </li>
            <li className="nav-item item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Fitur
              </NavLink>
            </li>
            <li className="nav-item item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Produk
              </NavLink>
            </li>
            <li className="nav-item item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item item">
              <NavLink
                exact
                to="/bantuan"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bantuan
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/bantuan2"
                activeClassName="active"
                className="nav-button"
                onClick={handleClick}
              >
                Download Sekarang
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
