import React from "react";
import PostTitle from "./PostTitle";
import DomainInfo from "./DomainInfo";

const PostInformationPartOne = ({index, uuid, uuidForShow, title, description, domain_cached_logo_url, domain_name, publishTime}) => {
  return (
    <div className="postInformationPartOne">
      <PostTitle
        uuid={uuid}
        uuidForShow={uuidForShow}
        title={title}
      />
      <PostTitle
        index={index}
        uuid={uuid}
        uuidForShow={uuidForShow}
        title={title}
        description={description}
      />
      <DomainInfo
        domain_cached_logo_url={domain_cached_logo_url}
        domain_name={domain_name}
        publishTime={publishTime}
      />
    </div>
  );
}

export default PostInformationPartOne;