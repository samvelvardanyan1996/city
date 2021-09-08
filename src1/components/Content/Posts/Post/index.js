import React from "react";
import ImageOfThePost from "./ImageOfThePost";
import MainOfThePostContent from "./MainOfThePostContent";

const Post = ({ index, author_image_url, title, description, domain_cached_logo_url, domain_name, publishTime, score, uuidForShow, setUuidForShow }) => {
  return (
    <div className="post">
      <ImageOfThePost
        author_image_url={author_image_url}
      />
      <MainOfThePostContent
        index={index}
        title={title}
        description={description}
        domain_cached_logo_url={domain_cached_logo_url}
        domain_name={domain_name}
        publishTime={publishTime}
        score={score}
        uuidForShow={uuidForShow}
        setUuidForShow={setUuidForShow}
      />
    </div>
  );
}

export default Post;