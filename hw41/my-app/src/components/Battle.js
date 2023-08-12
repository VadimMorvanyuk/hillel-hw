import { useCallback, useState } from "react";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";
import { Link } from "react-router-dom";

const PLAYER_ID_ENUM = {
  playerOne: "playerOne",
  playerTwo: "playerTwo",
};

const Battle = () => {
  const [players, setPlayers] = useState({
    playerOneImage: null,
    playerTwoImage: null,
    playerOneName: "",
    playerTwoName: "",
  });

  const handlerSubmit = useCallback(
    (id, userName) => {
      setPlayers((prevState) => ({
        ...prevState,
        [`${id}Name`]: userName,
        [`${id}Image`]: `https://github.com/${userName}.png?size200`,
      }));
    },
    [players]
  );

  const handlerReset = (id) => {
    setPlayers((prevState) => ({
      ...prevState,
      [`${id}Name`]: "",
      [`${id}Image`]: null,
    }));
  };

  return (
    <div>
      <div className="row">
        {players.playerOneImage ? (
          <PlayerPreview
            avatar={players.playerOneImage}
            userName={players.playerOneName}
          >
            <button
              className="reset"
              onClick={() => handlerReset(PLAYER_ID_ENUM.playerOne)}
            >
              reset
            </button>
          </PlayerPreview>
        ) : (
          <PlayerInput
            id={PLAYER_ID_ENUM.playerOne}
            label="Player 1"
            onSubmit={handlerSubmit}
          />
        )}
        {players.playerTwoImage ? (
          <PlayerPreview
            avatar={players.playerTwoImage}
            userName={players.playerTwoName}
          >
            <button
              className="reset"
              onClick={() => handlerReset(PLAYER_ID_ENUM.playerTwo)}
            >
              reset
            </button>
          </PlayerPreview>
        ) : (
          <PlayerInput
            id={PLAYER_ID_ENUM.playerTwo}
            label="Player 2"
            onSubmit={handlerSubmit}
          />
        )}
      </div>
      {players.playerOneImage && players.playerTwoImage ? (
        <Link
          className="button"
          to={{
            pathname: "results",
            search: `?playerOneName=${players.playerOneName}&playerTwoName=${players.playerTwoName}`,
          }}
        >
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;
