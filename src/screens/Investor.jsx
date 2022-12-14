import React from "react";
import Header from "./Header.jsx";
import "../assets/Index.jsx";
import { header, footerLogo } from "../assets/Index.jsx";
import { Forminvester } from "./Forminvester";
import { Footer } from "./Footer";

export default function Startup() {
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
      <Forminvester />
      <Footer footerLogo={footerLogo} />
    </>
  );
}
