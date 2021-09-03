import React from "react";

const SelectorRated = () => {
  return (
    <div className="selector_rated visibilityHidden">
      <div className="label">ORDER</div>
      <div className="option flexRow">
        <div className="checkBox checked">✔</div>
        <div>Top Rated</div>
      </div>
      <div className="option flexRow">
        <div className="checkBox">✔</div>
        <div>Latest</div>
      </div>
      <div className="option flexRow">
        <div className="checkBox">✔</div>
        <div>Most Read</div>
      </div>
      <div className="option flexRow">
        <div className="checkBox">✔</div>
        <div>Popular</div>
      </div>
    </div>
  );
}

export default SelectorRated;