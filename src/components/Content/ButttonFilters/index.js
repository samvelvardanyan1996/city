import React from "react";
import Triagle from "./Triagle";
import FilterActionButtons from "./FilterActionButtons";
import Selectors from "./Selectors";

const ButttonFilters = ({show}) => {
  return (
    <div className={show === false ? "butttonFilters displayNone" : "butttonFilters"}>
      <Triagle />
      <FilterActionButtons />
      <Selectors />
    </div>
  );
}

export default ButttonFilters;