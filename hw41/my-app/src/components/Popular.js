import { useState, useEffect } from "react";
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
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPopularRepos(selectedLanguage)
      .then((data) => setRepos(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [selectedLanguage]);

  if (loading) {
    return (
      <>
        <Languages
          languages={languages}
          setSelectedLanguage={setSelectedLanguage}
          selectedLanguage={selectedLanguage}
          loading={loading}
        />
        <Loader />
      </>
    );
  }

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <Languages
        languages={languages}
        setSelectedLanguage={setSelectedLanguage}
        selectedLanguage={selectedLanguage}
        loading={loading}
      />
      <ReposList repos={repos} />
    </div>
  );
};

export default Popular;
