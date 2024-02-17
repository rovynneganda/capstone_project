import React from "react";
import { logo } from "./icons_assets";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <img src={logo} alt="" style={{ width: "200px" }} />
          <p style={{ width: "300px" }}>
            We are family owned Meditarrenaran restaurant focused on traditional
            recipes served with a modern twist
          </p>
        </div>
        <ul className="footer-ul">
          <h3>Doormat Navigation</h3>
          <li style={{ marginBottom: "6px" }}>Home</li>
                 <li style={{ marginBottom: "6px" }}>About</li>
                 <li style={{ marginBottom: "6px" }}>Menu</li>
                 <li style={{ marginBottom: "6px" }}>Reservations</li>
                 <li style={{ marginBottom: "6px" }}>Order Online</li>
                 <li style={{ marginBottom: "6px" }}>Login</li>
        </ul>
        <ul className="footer-ul">
          <h3>Contact</h3>
                 <li style={{ marginBottom: "6px" }}>Address</li>
                 <li style={{ marginBottom: "6px" }}>Phone Number</li>
                 <li style={{ marginBottom: "6px" }}>Email</li>
        </ul>
        <ul className="footer-ul">
          <h3>Contact</h3>
                 <li style={{ marginBottom: "6px" }}>Address</li>
                 <li style={{ marginBottom: "6px" }}>Phone Number</li>
                 <li style={{ marginBottom: "6px" }}>Email</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
