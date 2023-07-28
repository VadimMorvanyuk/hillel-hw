import React from "react";

const Languages = React.memo(
  ({ languages, setSelectedLanguage, selectedLanguage, loading }) => {
    return (
      <ul className="languages">
        {languages.map((language, index) => (
          <li
            key={index}
            style={{ color: selectedLanguage === language ? "red" : "black" }}
            onClick={() => !loading && setSelectedLanguage(language)}
          >
            {language}
          </li>
        ))}
      </ul>
    );
  }
);

export default Languages;
