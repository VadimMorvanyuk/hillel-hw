import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { fetchPopularRepos } from "./api";
import Languages from "./Languages";
import ReposList from "./ReposList";
import Loader from "./Loader";
import Error from "./Error";

const languages = [
  "All",
  "Javascript",
  "Swift",
  "Java",
  "C++",
  "Python",
  "Ruby",
  "Typescript",
];

const Popular = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const lang = searchParams.get("lang");

  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPopularRepos(selectedLanguage)
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, [selectedLanguage]);

  if (error) {
    return <Error />;
  }

  return (
    <div>
      {loading ? (
        <>
          <Languages
            languages={languages}
            setSelectedLanguage={setSelectedLanguage}
            selectedLanguage={selectedLanguage}
            loading={loading}
          />
          <Loader />
        </>
      ) : (
        <>
          {!loading && (
            <Languages
              languages={languages}
              setSelectedLanguage={setSelectedLanguage}
              selectedLanguage={selectedLanguage}
              loading={loading}
            />
          )}
          <ReposList repos={repos} />
        </>
      )}
    </div>
  );
};

export default Popular;
