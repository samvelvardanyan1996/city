import React from "react";
import { getData } from "./getData";

const Posts = ({ data, uuidForShow, setUuidForShow }) => {
  // console.log("Posts data", data);
  let listPosts = data.length !== 0 && getData(data, uuidForShow, setUuidForShow);

  return (
    <div className="posts">
      {listPosts}
    </div>
  );
}

export default Posts;