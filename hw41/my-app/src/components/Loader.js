import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="loader-container">
      <ClipLoader
        size={120}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
