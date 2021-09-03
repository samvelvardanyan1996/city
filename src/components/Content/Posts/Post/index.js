import React from "react";
import ImageOfThePost from "./ImageOfThePost";
import MainOfThePostContent from "./MainOfThePostContent";

const Post = () => {
  return (
    <div className="post">
      <ImageOfThePost />
      <MainOfThePostContent />
    </div>
  );
}

export default Post;