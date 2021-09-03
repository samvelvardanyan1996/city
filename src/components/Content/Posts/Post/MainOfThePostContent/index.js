import React from "react";
import PostInformationPartOne from "./PostInformationPartOne";
import PostInformationPartTwo from "./PostInformationPartTwo";

const MainOfThePostContent = () => {
  return (
    <div className="mainOfThePostContent">
      <PostInformationPartOne />
      <PostInformationPartTwo />
    </div>
  );
}

export default MainOfThePostContent;