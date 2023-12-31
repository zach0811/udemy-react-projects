import React, { useState } from "react";
import { ErrorModal } from "./ErrorModal";

export const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleAge = (event) => {
    setAge(event.target.value);
  };

  const closeModal = () => {
    setError(false);
  };

  const handleAddUser = () => {
    if (userName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name (non-empty values).",
      });
    } else if (age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age (non-empty values).",
      });
    } else {
      props.handleAddUser(age, userName);
      setAge("");
      setUserName("");
    }
  };

  console.log("error", error);

  return (
    <div className="form">
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          close={closeModal}
        />
      )}
      <div className="input">
        <input
          onChange={handleUserName}
          value={userName}
          placeholder="Username"
          type="text"
        ></input>

        <input
          placeholder="Age"
          onChange={handleAge}
          value={age}
          type="number"
          maxLength="3"
        ></input>
        <button className="submit-button" type="submit" onClick={handleAddUser}>
          Add User
        </button>
      </div>
    </div>
  );
};
