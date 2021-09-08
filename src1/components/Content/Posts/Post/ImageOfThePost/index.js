import React from "react";

const ImageOfThePost = ({ author_image_url }) => {
  return (
    <div className="imageOfThePost">
      <img
        className="image"
        src={author_image_url}
      />
    </div>
  );
}

export default ImageOfThePost;