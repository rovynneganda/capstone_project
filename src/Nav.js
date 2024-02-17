import React from "react";
import { logo } from "./icons_assets";
import { useState } from "react";
const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const handleSetNavbaR = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <nav className="nav">
        <a href="/">
          <img src={logo} alt="" className="logo-img" />
        </a>
        {/* {`${navbar ? '' : ''}`} */}
        <div onClick={handleSetNavbaR}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-ul">
          <li>
            <a className="a-tag" href="">
              Home
            </a>
          </li>
          <li>
            <a className="a-tag" href="">
              About
            </a>
          </li>
          <li>
            <a className="a-tag" href="">
              Services
            </a>
          </li>
          <li>
            <a className="a-tag" href="">
              Menu
            </a>
          </li>
          <li>
            <a className="a-tag" href="">
              Reservations
            </a>
          </li>
          <li>
            <a className="a-tag" href="">
              Order Online
            </a>
          </li>
          <li>
            <a className="a-tag" href="">
              Login
            </a>
          </li>
        </ul>
      </nav>
      <ul className={`${navbar ? "ul-phones" : "ul-phoneshidden"}`}>
        <li style={{ marginBottom: "6px" }}>
          <a className="a-tag" href="">
            Home
          </a>
        </li>
        <li style={{ marginBottom: "6px" }}>
          <a className="a-tag" href="">
            About
          </a>
        </li>
        <li style={{ marginBottom: "6px" }}>
          <a className="a-tag" href="">
            Services
          </a>
        </li>
        <li style={{ marginBottom: "6px" }}>
          <a className="a-tag" href="">
            Menu
          </a>
        </li>
        <li style={{ marginBottom: "6px" }}>
          <a className="a-tag" href="">
            Reservations
          </a>
        </li>
        <li style={{ marginBottom: "6px" }}>
          <a className="a-tag" href="">
            Order Online
          </a>
        </li>
        <li style={{ marginBottom: "6px" }}>
          <a className="a-tag" href="">
            Login
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
