import React from "react";

export function Footer({ footerLogo }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,.9)",
        marginTop: "4em",
      }}
    >
      <div className="foter__container__main">
        <div className="header__logo">
          <a href="/">
            <img src={footerLogo} alt="#" />
          </a>
        </div>
        <div className="quick__link">
          <div className="quick__links__heading">Quick links</div>
          <div className="foter__links">
            <a className="foter__button" href="">
              Home
            </a>
            <a className="foter__button" href="">
              About
            </a>
            <a className="foter__button" href="">
              Service
            </a>
            <a className="foter__button" href="">
              contact
            </a>
          </div>
        </div>
        <div className="contact__us__container">
          <div className="contact__us__heading">Contact us</div>
          <div className="contact__us__number">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div className="contact__us__number__text">+91-123-456-7890</div>
          </div>
          <div className="contact__us__number">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <div className="contact__us__number__text">
              fizzanadeemsiddiqui@peervestglobal.com
            </div>
          </div>
          <div className="contact__us__number">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-map-pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <div className="contact__us__number__text">
              NICL, SBASSE basement, LUMS, Sector U DHA <br />
              Phase 3, Lahore, Punjab 54792
            </div>
          </div>
        </div>
        <div className="social__media__links__container">
          <div className="social__media__links__container__heading">
            Social media
          </div>
          <div className="social__media__links">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
            Facebook
          </div>
          <div className="social__media__links">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            Linkdin
          </div>
        </div>
      </div>
    </div>
  );
}
