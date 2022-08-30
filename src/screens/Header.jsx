import React, { useEffect, useLayoutEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Close } from "./Close";
import { headerlogo } from "../assets/Index.jsx";
import { Menu } from "./Menu";
import "./App.scss";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function checkNavOpenClose() {
    if (window.innerWidth < 900) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useLayoutEffect(() => {
    checkNavOpenClose();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", checkNavOpenClose);
    window.addEventListener("scroll", setFixed);
  }, []);

  function setFixed() {
    checkNavOpenClose();
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }

  return (
    <>
      <div className="nav__main" style={{ backgroundColor: "white" }}>
        <div
          className="header__content__content__nav__main"
          data-aos="fade-left"
          style={
            isScrolling
              ? {
                  backgroundColor: "white",
                  height: "80px",
                  paddingTop: "1.5em",
                }
              : null
          }
        >
          <a href="/" className="header__content__nav__heading">
            <img src={headerlogo} alt="#" />
          </a>

          {isOpen ? (
            <OutsideClickHandler
              onOutsideClick={() => {
                if (window.innerWidth < 900) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="header__content__content__nav__components">
                <a className="header__buttons" href="#Home">
                  Home
                </a>
                <a className="header__buttons" href="#components">
                  Components
                </a>
                <a className="header__buttons" href="#Specifications">
                  Specifications
                </a>
                <a className="header__buttons" href="#Features">
                  Features
                </a>
                <a className="header__buttons" href="#Location">
                  Location
                </a>
              </div>
            </OutsideClickHandler>
          ) : null}

          <button
            className="ibt__contant__nav"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            title="Menu"
          >
            {isOpen ? (
              <Close size={24} color="white" />
            ) : (
              <Menu size={24} color="white" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
