import React from "react";

const SelectorRated = ({ orderValue, changeOrderValue, active}) => {
  const orderValueArrays = ["Top Rated", "Latest", "Retweeted", "Read"];

  return (
    <div className={active !== "Top Rated" ? "selector_rated visibilityHidden" : "selector_rated"}>
      <div className="label">ORDER</div>
      {orderValueArrays.map((item, index) => {
        return (
          <div
            key={index}
            className="option flexRow"
            onClick={(item) => changeOrderValue(item)}
          >
            <div
              className={ orderValue[orderValue.length - 1][item] === true ? "checkBox checked" : "checkBox"}
            >
              { orderValue[orderValue.length - 1][item] === true ? "✔" : "" }
            </div>
            <div>{item}</div>
          </div>
        )
      })}
    </div>
  );
}

export default SelectorRated;