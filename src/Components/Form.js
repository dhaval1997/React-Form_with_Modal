import React, { useState } from "react";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const Form = (props) => {
  const [error, setError] = useState();
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age",
      });
      return;
    }
    const formDetails = {
      name: enteredName,
      age: enteredAge,
    };
    props.onUserAdd(formDetails);
    setEnteredAge("");
    setEnteredName("");
  };

  const errorHadler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHadler}
        />
      )}
      <form className="form-container" onSubmit={formHandler}>
        <label>UserName</label>
        <input
          value={enteredName}
          onChange={nameHandler}
          type="text"
          placeholder="Enter Username"
        />
        <label>Age</label>
        <input
          value={enteredAge}
          onChange={ageHandler}
          type="number"
          placeholder="Enter age"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
