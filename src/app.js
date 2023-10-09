import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Form from "./Components/Form";
import List from "./Components/List";
import "../style.css";

const App = () => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userDetails) => {
    setUserList((prevUserList) => {
      return [userDetails, ...prevUserList];
    });
  };

  return (
    <div>
      <Form onUserAdd={addUserHandler} />
      <List users={userList} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
