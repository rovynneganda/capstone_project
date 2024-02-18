import React from "react";
import { headerpic } from "./icons_assets";
const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Meditarrenaran restaurant, focused <br /> on
          traditional recipes served with a modern twist
        </p>
        <button>Reserve a Table</button>
      </div>

      <div className="header-img">
        <img src={headerpic} />
      </div>
    </header>
  );
};

export default Header;
