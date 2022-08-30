import React from "react";
import Header from "./Header.jsx";
import "../assets/Index.jsx";
import { header } from "../assets/Index.jsx";

export default function Startup() {
  return (
    <>
      <Header />
      <div className="header__background">
        <img src={header} alt="#" />
      </div>
      <div className="header__content">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
        consequatur repellendus, porro amet atque possimus voluptatem adipisci
        vel saepe provident commodi quibusdam praesentium eius ipsa enim?
        Corporis veniam rem nobis.
      </div>
    </>
  );
}
