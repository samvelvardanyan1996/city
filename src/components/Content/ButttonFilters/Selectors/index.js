import React, { Fragment } from "react";
import SelectorAllLanguages from "./SelectorAllLanguages";
import SelectorRated from "./SelectorRated";
import SelectorTime from "./SelectorTime";

const Selectors = () => {
  return (
    <div className="displayNone selectors">
      <SelectorTime />
      <SelectorRated />
      <SelectorAllLanguages />
    </div>
  );
}

export default Selectors;