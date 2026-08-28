import React from "react";
import "./DualButton.css";

const DualButton = ({ text, onClick, variant = "gold", href = "" }) => {
  const arrowIcon = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );

  if (href) {
    return (
      <div className={`dual-btn-group ${variant}`}>
        <a href={href} className="dual-btn-main">
          {text}
        </a>
        <a href={href} className="dual-btn-arrow" aria-label="Arrow action">
          {arrowIcon}
        </a>
      </div>
    );
  }

  return (
    <div className={`dual-btn-group ${variant}`}>
      <button onClick={onClick} className="dual-btn-main">
        {text}
      </button>
      <button onClick={onClick} className="dual-btn-arrow" aria-label="Arrow action">
        {arrowIcon}
      </button>
    </div>
  );
};

export default DualButton;
