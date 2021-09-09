import React from "react";

const ActionButtons = ({active, updateData, changeActions, showFilters, show}) => {
  return (
    <div className="action_buttons">
      <button className={active === "Refresh" ? "active button" :  "button"} onClick={() => window.location.reload()}>
        <svg
          className="refresh"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"
          ></path>
        </svg>
        <span className="action_button_text">Refresh</span>
      </button>
      <button className={active === "Filters" ? "active button" :  "button"} onClick={() => { changeActions("Filters"); showFilters(!show) }}>
        <svg
          className="filter"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"
          ></path>
        </svg>
        <span className="action_button_text">Filters</span>
      </button>
    </div>
  );
}

export default ActionButtons;