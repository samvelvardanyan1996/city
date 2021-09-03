import React from "react";
import Post from "./Post";
import Reaction from "./Reaction";

const Posts = () => {
  return (
    <div className="posts">
      <div className="postContainer">
        <Post />
        <Reaction />
      </div>
    </div>
  );
}

export default Posts;