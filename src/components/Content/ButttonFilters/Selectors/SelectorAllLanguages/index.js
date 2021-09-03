import React from "react";

const SelectorAllLanguages = () => {
  return (
    <div className="selector_all_languages visibilityHidden">
      <div className="label">LANGUAGES</div>
      <div className="option flexRow">
        <div className="checkBox checked">✔</div>
        <div>Select / UnSelect All</div>
      </div>
      <div className="option flexRow">
        <div className="checkBox checked">✔</div>
        <div>English</div>
      </div>
      <div className="option flexRow">
        <div className="checkBox checked">✔</div>
        <div>German</div>
      </div>
      <div className="option flexRow">
        <div className="checkBox checked">✔</div>
        <div>Chinese</div>
      </div>
      <div className="option flexRow">
        <div className="checkBox checked">✔</div>
        <div>Italian</div>
      </div>
    </div>
  );
}

export default SelectorAllLanguages;