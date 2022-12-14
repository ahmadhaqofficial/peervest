import React from "react";
import Header from "./Header.jsx";
import "../assets/Index.jsx";
import { header } from "../assets/Index.jsx";
import Startup from "./Startup";
import Startupsecond from "./Startupsecond";

export default function Services() {
  return (
    <>
      <Header />
      <div className="header__background">
        <img src={header} alt="#" />
      </div>
      <div className="header__content">
        <div className="header__content__heading">Register as Investor</div>
        <div className="header__content__sub__heading">
          Join the Peervest Investor circle to start funding investor-ready
          startups of your preference
        </div>
      </div>

      <Startup />
      <Startupsecond />
    </>
  );
}
