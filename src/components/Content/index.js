import React from "react";
import Title from "./Title";
import ActionButtons from "./ActionButtons";
import ButttonFilters from "./ButttonFilters";
import Posts from "./Posts";

const Content = () => {
  return (
    <div className="content">
      <Title />
      <ActionButtons />
      <ButttonFilters />
      <Posts />
    </div>
  );
}

export default Content;