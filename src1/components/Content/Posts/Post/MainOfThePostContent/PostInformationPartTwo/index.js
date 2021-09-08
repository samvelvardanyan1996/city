import React from "react";
import PostDropDownContainer from "./PostDropDownContainer";
import PostScore from "./PostScore";

const PostInformationPartTwo = ({index, score, uuidForShow, setUuidForShow}) => {
  return (
    <div className="postInformationPartTwo">
      <PostScore score={score} />
      <PostDropDownContainer index={index} uuidForShow={uuidForShow} setUuidForShow={setUuidForShow} />
    </div>
  );
}

export default PostInformationPartTwo;