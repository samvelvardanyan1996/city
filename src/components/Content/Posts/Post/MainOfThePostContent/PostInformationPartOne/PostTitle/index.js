import React from "react";

const PostTitle = ({ shortDescription, longDescription }) => {
  return (
    <div className="postTitle">
      {shortDescription !== null ? shortDescription : longDescription}
    </div>
  );
}

export default PostTitle;