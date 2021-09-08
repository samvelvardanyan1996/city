import React from "react";
import SelectorAllLanguages from "./SelectorAllLanguages";
import SelectorRated from "./SelectorRated";
import SelectorTime from "./SelectorTime";

const Selectors = ({refreshTime, changeRefreshTime, orderValue, changeOrderValue, language, changeLanguageValues, active}) => {
  return (
    <div className={active === "" ? "displayNone selectors" : " selectors"}>
      <SelectorTime
        refreshTime={refreshTime}
        changeRefreshTime={changeRefreshTime}
        active={active}
      />
      <SelectorRated
        orderValue={orderValue}
        changeOrderValue={changeOrderValue}
        active={active}
      />
      <SelectorAllLanguages
        language={language}
        changeLanguageValues={changeLanguageValues}
        active={active}
      />
    </div>
  );
}

export default Selectors;