import React, { useState } from "react";

const SelectorTime = ({ refreshTime, changeRefreshTime, active }) => {
  const refreshTimeArrays = ["1min", "2min", "3min"]

  return (
    <div className={active !== "AUTOREFRESH" ? "selector_time visibilityHidden" : "selector_time"}>
      <div className="label">AUTOREFRESH</div>
      {refreshTimeArrays.map((item, index) => {
        return (
          <div
            key={index}
            className="option flexRow"
            onClick={(item) => changeRefreshTime(item)}
          >
            <div
              className={ refreshTime[refreshTime.length - 1][item] === true ? "checkBox checked" : "checkBox"}
            >
              { refreshTime[refreshTime.length - 1][item] === true ? "✔" : "" }
            </div>
            <div>{item}</div>
          </div>
        )
      })}
    </div>
  );
}

export default SelectorTime;