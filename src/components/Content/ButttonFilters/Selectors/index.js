import React, { Fragment } from "react";
import SelectorAllLanguages from "./SelectorAllLanguages";
import SelectorRated from "./SelectorRated";
import SelectorTime from "./SelectorTime";

const Selectors = () => {
  return (
    <Fragment>
      <SelectorTime />
      <SelectorRated />
      <SelectorAllLanguages />
    </Fragment>
  );
}

export default Selectors;