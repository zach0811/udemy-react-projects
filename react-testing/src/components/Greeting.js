import React, { useState } from "react";
import { Output } from "./Output";

export const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h1>Hello, world!</h1>
      {!changeText && <p>It's good to see you!</p>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};
