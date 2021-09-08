import React from "react";
import DomainImage from "./DomainImage";
import DomainTitle from "./DomainTitle";
import DomainPublishTime from "./DomainPublishTime";

const DomainInfo = ({domain_cached_logo_url, domain_name, publishTime}) => {
  return (
    <div className="domainInfo">
      <DomainImage
        domain_cached_logo_url={domain_cached_logo_url}
      />
      <DomainTitle
        domain_name={domain_name}
      />
      <DomainPublishTime
        publishTime={publishTime}
      />
    </div>
  );
}

export default DomainInfo;