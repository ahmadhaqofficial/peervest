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
      <div className="header">
        <div className="header__mian">
          <div className="header__logo">
            <a href="#">
              <img src={headerlogo} alt="#" />
            </a>
          </div>

          {isOpen ? (
            <OutsideClickHandler
              onOutsideClick={() => {
                if (window.innerWidth < 1200) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="header__nav">
                <div className="header__components">
                  <a className="header__links" href="#">
                    Investor
                  </a>
                  <a className="header__links" href="#">
                    Start-up
                  </a>
                  <a className="header__links" href="#">
                    Services
                  </a>
                  <a className="header__links" href="#">
                    About Us
                  </a>
                  <a className="header__links" href="#">
                    FAQ
                  </a>
                  <button className="header__button">Contact</button>
                </div>
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
              <Close size={24} color="#d39844" />
            ) : (
              <Menu size={24} color="#d39844" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
