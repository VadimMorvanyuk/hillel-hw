import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-container">
      <h1>GitHub Battle</h1>
      <Link to='battle' className="button">Battle</Link>
    </main>
  );
};

export default Home;
