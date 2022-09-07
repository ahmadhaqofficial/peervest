import React from "react";
export default function Startup({}) {
  return (
    <div style={{ backgroundColor: "#e9e9e9" }}>
      <div className="start__up__container">
        <div className="start__up__heading">Investors</div>
        <div className="start__up__svg__container__main">
          <div className="start__up__svg__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="65"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-copy"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <div className="start__up__svg__container__info">
              Start-up categories to <br /> match your preferences
            </div>
          </div>
          <div className="start__up__svg__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="65"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-file-plus"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            <div className="start__up__svg__container__info">
              Basic due diligence for <br /> risk mitigation
            </div>
          </div>
          <div className="start__up__svg__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="65"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-thumbs-up"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            <div className="start__up__svg__container__info">
              Mile-stone based funds <br /> dispersion
            </div>
          </div>
          <div className="start__up__svg__container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="65"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-thumbs-up"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>
            <div className="start__up__svg__container__info">
              Notifications for start- <br /> ups invested in and new relevant
              startups
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
