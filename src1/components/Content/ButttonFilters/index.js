import React, { useState } from "react";
import Triagle from "./Triagle";
import FilterActionButtons from "./FilterActionButtons";
import Selectors from "./Selectors";

const ButttonFilters = ({refreshTime, changeRefreshTime, orderValue, changeOrderValue, language, changeLanguageValues, show}) => {
  const [active, setActive] = useState("");
  const chooseSelector = (value) => {
    setActive(value);
  }

  return (
    <div className={show === false ? "butttonFilters displayNone" : "butttonFilters"}>
      <Triagle />
      <FilterActionButtons
        active={active}
        chooseSelector={chooseSelector}
      />
      <Selectors
        orderValue={orderValue}
        changeOrderValue={changeOrderValue}
        refreshTime={refreshTime}
        changeRefreshTime={changeRefreshTime}
        language={language}
        changeLanguageValues={changeLanguageValues}
        active={active}
      />
    </div>
  );
}

export default ButttonFilters;