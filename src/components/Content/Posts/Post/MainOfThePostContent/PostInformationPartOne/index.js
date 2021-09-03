import React from "react";
import PostTitle from "./PostTitle";
import DomainInfo from "./DomainInfo";

const PostInformationPartOne = () => {
  let shortDescription = "Bitcoin breakout may be ahead technicals show rally extension";
  let longDescription = "Bitcoin breakout may be ahead technicals show rally extensionBitcoin breakout may be ahead technicals show rally extensionBitcoin breakout may be ahead technicals show rally extensionBitcoin breakout may be ahead technicals show rally extensionBitcoin breakout may be ahead technicals show rally extensionBitcoin breakout may be ahead technicals show rally extension";

  return (
    <div className="postInformationPartOne">
      <PostTitle shortDescription={shortDescription} longDescription={null} />
      <PostTitle shortDescription={null} longDescription={longDescription} />
      <DomainInfo />
    </div>
  );
}

export default PostInformationPartOne;