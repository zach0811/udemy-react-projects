import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef("");
  const [enteredPlayer, setEnteredPlayer] = useState("");

  const handleSubmitPlayer = () => {
    setEnteredPlayer(playerName.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? "unknown entitiy"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSubmitPlayer}>Set Name</button>
      </p>
    </section>
  );
}
