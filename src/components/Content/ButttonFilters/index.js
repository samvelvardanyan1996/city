import React, { Fragment } from "react";
import Triagle from "./Triagle";
import FilterActionButtons from "./FilterActionButtons";
import Selectors from "./Selectors";

const ButttonFilters = () => {
  return (
    <div className="butttonFilters displayNone">
      <Triagle />
      <FilterActionButtons />
      <Selectors />
    </div>
  );
}

export default ButttonFilters;