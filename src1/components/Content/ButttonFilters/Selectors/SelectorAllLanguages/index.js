import React from "react";

const SelectorAllLanguages = ({active, language, changeLanguageValues,}) => {

  const languageArrays = ["Select / UnSelect All", "English", "German", "Chinese", "Italian"];

  return (
    <div className={active !== "All Languages" ? "selector_rated visibilityHidden" : "selector_rated"}>
      <div className="label">LANGUAGES</div>
      {languageArrays.map((item, index) => {
        switch (item) {
          case "Select / UnSelect All":
            return (
              <div
                key={index}
                className="option flexRow"
                onClick={
                  (item) => changeLanguageValues(item)
                }
              >
                <div
                  className={ language[language.length - 1][item] === true ? "checkBox checked" : "checkBox"}
                >
                  { language[language.length - 1][item] === true ? "✔" : "" }
                </div>
                <div>{item}</div>
              </div>
            )
          default:
            return (
              <div
                key={index}
                className="option flexRow"
                onClick={
                  (item) => changeLanguageValues(item)
                }
              >
                <div
                  className={ language[language.length - 1][item] === true ? "checkBox checked" : "checkBox"}
                >
                  { language[language.length - 1][item] === true ? "✔" : "" }
                </div>
                <div>{item}</div>
              </div>
            )
        }
      })}
    </div>
  );
}

export default SelectorAllLanguages;