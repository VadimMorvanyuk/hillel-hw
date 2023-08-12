import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { makeBattle } from "./api";
import Player from "./Player";

const Results = () => {
  const location = useLocation();
  const [loading, setloading] = useState(true);
  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    makeBattle([
      searchParams.get("playerOneName"),
      searchParams.get("playerTwoName"),
    ])
      .then(([winner, loser]) => {
        console.log("Winner Data:", winner);
        console.log("Loser Data:", loser);
        setWinner(winner);
        setLoser(loser);
      })
      .catch((error) => setError(error))
      .finally(() => setloading(false));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="row">
      <Player label="Winner" score={winner.score} profile={winner.profile} />
      <Player label="Loser" score={loser.score} profile={loser.profile} />
    </div>
  );
};

export default Results;
