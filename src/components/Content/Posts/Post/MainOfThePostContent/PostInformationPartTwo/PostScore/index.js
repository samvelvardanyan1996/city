import React from "react";

const PostScore = ({score}) => {
  let color = score > 60 ? "green" : (score > 30 && score < 61) ? "yellow" : "red";

  return (
    <div className={`postScore ${color}`}>{score}%</div>
  );
}

export default PostScore;