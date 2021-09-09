import React from "react";

const PostTitle = ({ index, uuidForShow, title, description }) => {
  let postTitle = "postTitle";
  // console.log("uuidForShow", uuidForShow);
  // console.log("index", index);
  // console.log("uuidForShow[index]", uuidForShow[index]);
  if(index !== undefined && uuidForShow.length !== 0 && uuidForShow[index].show === false){
    postTitle = "displayNone postTitle";
  }

  return (
    <div className={postTitle}>
      {description === undefined ? title : description}
    </div>
  );
}

export default PostTitle;