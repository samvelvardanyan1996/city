import React from "react";
import ImageOfThePost from "./ImageOfThePost";
import MainOfThePostContent from "./MainOfThePostContent";

const Post = () => {
  return (
    <div className="posts">
      <div className="postContainer">
        <ImageOfThePost />
        <MainOfThePostContent />
      </div>
    </div>
  );
}

export default Post;