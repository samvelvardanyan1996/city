import React from "react";
import Post from "./Post";
import Reaction from "./Reaction";

export const getData = (data, uuidForShow, setUuidForShow) => {
  let returnData = data.map((post, index) => {
    let key                    = post.uuid;
    let author_image_url       = post.author_image_url;
    let title                  = post.title;
    let description            = post.description;
    let domain_cached_logo_url = post.domain_cached_logo_url;
    let domain_name            = post.domain_name;
    let publishTimeDiff        = post.publishTimeDiff;
    let score                  = post.score;

    let publishTimeDiffHours   = Math.round(publishTimeDiff / 3600);
    let publishTimeDiffMinutes = Math.round(publishTimeDiff / 60);
    let publishTimeDiffSeconds = Math.round(publishTimeDiff % 60);
    let publishTime = (publishTimeDiffHours > 0 ? publishTimeDiffHours + " h" : publishTimeDiffMinutes > 0 ? publishTimeDiffMinutes + "m" : publishTimeDiffSeconds + "s");

    return (
      <div className="postContainer" key={key}>
        <Post
          index={index}
          author_image_url={author_image_url}
          title={title}
          description={description}
          domain_cached_logo_url={domain_cached_logo_url}
          domain_name={domain_name}
          publishTime={publishTime}
          score={score}
          uuidForShow={uuidForShow}
          setUuidForShow={setUuidForShow}
        />
        <Reaction
          index={index}
          uuidForShow={uuidForShow}
        />
      </div>
    )
  });

  return returnData;
}