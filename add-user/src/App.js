import React from "react";
import { useState } from "react";
import { Form } from "./Components/Form";
import { UserList } from "./Components/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const handleUserList = (age, userName) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        {
          userName: userName,
          age: age,
          key: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div className="app-container">
      <Form handleAddUser={handleUserList} />
      <UserList userList={userList} />
    </div>
  );
}

export default App;
