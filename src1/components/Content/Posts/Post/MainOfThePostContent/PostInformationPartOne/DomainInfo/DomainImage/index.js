import React from "react";

const DomainImage = ({domain_cached_logo_url}) => {
  return (
    <div className="domainImage">
      <img
        className="image"
        src={domain_cached_logo_url}
      />
    </div>
  );
}

export default DomainImage;