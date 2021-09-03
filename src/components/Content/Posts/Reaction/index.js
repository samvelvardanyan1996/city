import React from "react";
import Like from "./Like";
import Dislike from "./Dislike";
import Bookmark from "./Bookmark";

const Reaction = () => {
  return (
    <div className="reactionContainer">
      <div className="reaction">
        <Like />
        <Dislike />
        <Bookmark />
      </div>
    </div>
  );
}

export default Reaction;