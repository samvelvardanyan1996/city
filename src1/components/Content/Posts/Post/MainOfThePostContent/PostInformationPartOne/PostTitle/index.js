import React from "react";

const PostTitle = ({ index, uuidForShow, title, description }) => {
  let postTitle = "postTitle";
  if(index !== undefined && uuidForShow.length !== 0 && uuidForShow[uuidForShow.length -20 + index].show === false){
    postTitle = "displayNone postTitle";
  }

  return (
    <div className={postTitle}>
      {description === undefined ? title : description}
    </div>
  );
}

export default PostTitle;