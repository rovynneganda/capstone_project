import React from "react";
import { lemondessert } from "./icons_assets";
import { bruchetta } from "./icons_assets";
import { greeksalad } from "./icons_assets";
const Main = () => {
  return (
    <>
      <main style={{paddingTop:"200px"}}>
        <div className="main-header">
          <h1>This week's Specials</h1>
          <button className="main-btn">Online Menu</button>
        </div>
        <div className="parent-section">
          <section className="main-section" style={{backgroundColor:"#9eb8b1",border:"none",borderRadius:"11px"}}>
            <img src={greeksalad} className="main-img" />
            <div className="title">
              <h3>Greek Salad</h3>
              <p style={{ color: "black" }}>$12.99</p>
            </div>
            <p style={{ color: "black" }} className="description">
              The famous greek salad of crispy lettuce, peppers, olives and our
              chicago style fota cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <button className="main-btn">Order Now</button>
          </section>
          <section className="main-section" style={{backgroundColor:"#9eb8b1",border:"none",borderRadius:"11px"}}>
            <img src={bruchetta} className="main-img" />
            <div className="title">
              <h3>Bruchetta</h3>
              <p style={{ color: "black" }}>$12.99</p>
            </div>
            <p style={{ color: "black" }} className="description">
              The famous greek salad of crispy lettuce, peppers, olives and our
              chicago style fota cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <button className="main-btn">Order Now</button>
          </section>
          <section className="main-section" style={{backgroundColor:"#9eb8b1",border:"none",borderRadius:"11px"}}>
            <img src={lemondessert} style={{width:"100%",border:"none",borderRadius:"10px", height:"200px"}} />
            <div className="title">
              <h3>Lemmon Dessert</h3>
              <p style={{ color: "black" }}>$12.99</p>
            </div>
            <p style={{ color: "black" }} className="description">
              The famous greek salad of crispy lettuce, peppers, olives and our
              chicago style fota cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <button className="main-btn">Order Now</button>
          </section>
        </div>
        
      </main>
    </>
  );
};

export default Main;
