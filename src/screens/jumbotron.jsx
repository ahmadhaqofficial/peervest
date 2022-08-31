import React from "react";

function jumbotron({ header }) {
  return (
    <>
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
    </>
  );
}
