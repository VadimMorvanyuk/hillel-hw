import { memo } from "react";
import { Link } from "react-router-dom";

const Languages = memo(
  ({ languages, setSelectedLanguage, selectedLanguage, loading }) => {

    return (
      <>
        <ul className="languages">
          {languages.map((language, index) => (
            <li
              key={index}
              onClick={() => !loading && setSelectedLanguage(language)}
            >
              <Link
                style={{
                  color: selectedLanguage === language ? "red" : "black",
                }}
                to={{ search: `?lang=${language}` }}
              >
                {language}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
);

export default Languages;
