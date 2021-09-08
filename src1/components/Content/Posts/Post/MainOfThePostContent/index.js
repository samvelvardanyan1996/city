import React, { useState } from "react";
import PostInformationPartOne from "./PostInformationPartOne";
import PostInformationPartTwo from "./PostInformationPartTwo";

const MainOfThePostContent = ({index, title, description, domain_cached_logo_url, domain_name, publishTime, score, uuidForShow, setUuidForShow}) => {
  return (
    <div className="mainOfThePostContent">
      <PostInformationPartOne
        index={index}
        uuidForShow={uuidForShow}
        title={title}
        description={description}
        domain_cached_logo_url={domain_cached_logo_url}
        domain_name={domain_name}
        publishTime={publishTime}
      />
      <PostInformationPartTwo
        index={index}
        score={score}
        uuidForShow={uuidForShow}
        setUuidForShow={setUuidForShow}
      />
    </div>
  );
}

export default MainOfThePostContent;