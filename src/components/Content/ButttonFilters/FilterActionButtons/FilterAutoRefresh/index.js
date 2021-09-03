import React from "react";

const FilterAutoRefresh = () => {
  return (
    <div className="button_selectors filter_action_button">
      <div>
        <div className="time">1 min</div>
        <div className="autorefresh">AUTOREFRESH</div>
      </div>
      <div>
        <svg
          className="chevron-down"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default FilterAutoRefresh;