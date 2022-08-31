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
        <div className="header__content__heading">Register as Investor</div>
        <div className="header__content__sub__heading">
          Join the Peervest Investor circle to start funding investor-ready
          startups of your preference
        </div>

        <section className="mian">
          <form className="form__container">
            <div className="form__container__heading">
              Email Address <span>*</span>
            </div>
            <input
              className="form__input"
              type="email"
              placeholder="Your Answer"
            />
            <span className="invaild__emial" id="message">
              Invaild Emial Address
            </span>
          </form>
          <form className="form__container">
            <div className="form__container__heading">
              Investor Name <span>*</span>
            </div>
            <input
              className="form__input"
              type="text"
              placeholder="Your Answer"
            />
            <span className="invaild__emial" id="message">
              This is required
            </span>
          </form>
          <form className="form__container">
            <div className="form__container__heading">
              Investor Type <span>*</span>
            </div>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Venture Capitalist</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Angel Investor</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">New Entrant</span>
            </label>
          </form>

          <form className="form__container">
            <div className="form__container__heading">
              Startup Stage Interested In To Invest <span>*</span>
            </div>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">First Check</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Pre-seed</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Seed</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Growth</span>
            </label>
            <span className="invaild__emial">This is required</span>
          </form>
          <form className="form__container">
            <div className="form__container__heading">
              Ticket Size To Invest <span>*</span>
            </div>
            <label className="label__container__two">
              <input className="label__input__two" type="radio" />
              <span className="label__container__span__two">$100,000</span>
            </label>
            <label className="label__container__two">
              <input className="label__input__two" type="radio" />
              <span className="label__container__span__two">
                $100,000-$500,000
              </span>
            </label>
            <label className="label__container__two">
              <input className="label__input__two" type="radio" />
              <span className="label__container__span__two">
                $500,000-$900,000
              </span>
            </label>
            <label className="label__container__two">
              <input className="label__input__two" type="radio" />
              <span className="label__container__span__two">$1 mn - $2 mn</span>
            </label>
            <label className="label__container__two">
              <input className="label__input__two" type="radio" />
              <span className="label__container__span__two">$ 2 mn</span>
            </label>
            <span className="invaild__emial" id="message">
              This is required
            </span>
          </form>
          <form className="form__container">
            <div className="form__container__heading">
              Industry Interested In <span>*</span>
            </div>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Fintech</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Edtech</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Logistic</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">E-commerce</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Agritech</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">IT Solution</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Entertainment</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Other:</span>
            </label>
            <input
              className="form__input"
              type="email"
              placeholder="Your answer"
            />
            <span className="invaild__emial" id="message">
              This is required
            </span>
          </form>
          <form className="form__container">
            <div className="form__container__heading">
              Business Model Interest In <span>*</span>
            </div>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">B2B</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">B2C</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">C2B</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">C2C</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">Other:</span>
            </label>
            <input
              className="form__input"
              type="email"
              placeholder="Your answer"
            />
            <span className="invaild__emial" id="message">
              This is required
            </span>
          </form>
          <form className="form__container">
            <div className="form__container__heading">
              Exit Plan <span>*</span>
            </div>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">5 years</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">5 - 10 years</span>
            </label>
            <label className="label__container">
              <input className="label__input" type="checkbox" />
              <span className="label__container__span">10 years</span>
            </label>
            <span className="invaild__emial" id="message">
              This is required
            </span>
          </form>
          <form className="buttons__end__form">
            <button className="submit__button">submit</button>
            <button className="clear__button">clear</button>
          </form>
        </section>
      </div>
    </>
  );
}
