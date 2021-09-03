import React, { useState } from "react";
import Title from "./Title";
import ActionButtons from "./ActionButtons";
import ButttonFilters from "./ButttonFilters";
import Posts from "./Posts";

const Content = () => {
  const [active, setActive] = useState("");
  const [show, setShow]     = useState(false);

  const changeActions = (value) => {
    setActive(value);
  }
  const showFilters = (value) => {
    setShow(value);
  }

  return (
    <div className="content">
      <Title />
      <ActionButtons active={active} changeActions={changeActions} showFilters={showFilters} />
      <ButttonFilters show={show} />
      <Posts />
    </div>
  );
}

export default Content;