import React from "react";
import DomainImage from "./DomainImage";
import DomainTitle from "./DomainTitle";
import DomainPublishTime from "./DomainPublishTime";

const DomainInfo = () => {
  return (
    <div className="domainInfo">
      <DomainImage />
      <DomainTitle />
      <DomainPublishTime />
    </div>
  );
}

export default DomainInfo;