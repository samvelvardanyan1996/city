import React from "react";
import FilterAutoRefresh from "./FilterAutoRefresh";
import FilterTopRated from "./FilterTopRated";
import FilterAllLanguages from "./FilterAllLanguages";
import FilterReset from "./FilterReset";

const FilterActionButtons = () => {
  return (
    <div className="filter_action_buttons">
      <FilterAutoRefresh />
      <FilterTopRated />
      <FilterAllLanguages />
      <FilterReset />
    </div>
  );
}

export default FilterActionButtons;