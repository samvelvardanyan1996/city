import React from "react";

const SelectorTime = () => {
  return (
    <div className="selector_time visibilityHidden">
      <div className="label">AUTOREFRESH</div>
      <div className="option flexRow">
        <div className="checkBox checked">✔</div>
        <div>1 min</div>
      </div>
      <div className="option flexRow">
        <div className="checkBox checked">✔</div>
        <div>2 min</div>
      </div>
      <div className="option flexRow">
        <div className="checkBox checked">✔</div>
        <div>3 min</div>
      </div>
    </div>
  );
}

export default SelectorTime;