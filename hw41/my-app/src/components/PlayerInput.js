import { useState, memo } from "react";

const PlayerInput = memo(({ id, label, onSubmit }) => {
  const [userName, setUserName] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();
    onSubmit(id, userName);
  };
  return (
    <form className="column" onSubmit={handlerSubmit}>
      <label className="header" htmlFor="userName">
        {label}
      </label>
      <input
        type="text"
        id="userName"
        value={userName}
        autoComplete="off"
        placeholder="Github UserName"
        onChange={(event) => setUserName(event.target.value)}
      />
      <button className="button" type="submit" disabled={!userName.length}>
        Submit
      </button>
    </form>
  );
});

export default PlayerInput;
