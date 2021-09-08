import React from "react";

const FilterReset = ({chooseSelector}) => {
  return (
    <div className="button_reset filter_reset" onClick={() => chooseSelector("")}>
      RESET
    </div>
  );
}

export default FilterReset;