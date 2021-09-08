import React from "react";
import Like from "./Like";
import Dislike from "./Dislike";
import Bookmark from "./Bookmark";

const Reaction = ({uuidForShow, index}) => {
  let reactionContainer = "reactionContainer";
  if(uuidForShow.length !== 0 && uuidForShow[index].show === false){
    reactionContainer = "displayNone reactionContainer";
  }

  return (
    <div className={reactionContainer}>
      <div className="reaction">
        <Like />
        <Dislike />
        <Bookmark />
      </div>
    </div>
  );
}

export default Reaction;