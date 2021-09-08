import React from "react";
import FilterAutoRefresh from "./FilterAutoRefresh";
import FilterTopRated from "./FilterTopRated";
import FilterAllLanguages from "./FilterAllLanguages";
import FilterReset from "./FilterReset";

const FilterActionButtons = ({ active, chooseSelector })=> {
  return (
    <div className="filter_action_buttons">
      <FilterAutoRefresh
        active={active}
        chooseSelector={chooseSelector}
      />
      <FilterTopRated
        active={active}
        chooseSelector={chooseSelector}
      />
      <FilterAllLanguages
        active={active}
        chooseSelector={chooseSelector}
      />
      <FilterReset
        chooseSelector={chooseSelector}
      />
    </div>
  );
}
export default FilterActionButtons;