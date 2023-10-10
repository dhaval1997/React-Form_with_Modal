import React, { useRef, useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModel";

const Form = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [error, setError] = useState();
  const formHandler = (e) => {
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredcollege = collegeInputRef.current.value;
    e.preventDefault();
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0 || enteredcollege.trim().length===0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name college and age (non-empty values).",
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
      college: enteredcollege
    };
    props.onUserAdd(formDetails);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
  };

  const errorHadler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHadler}
        />
      )}
      <form className="form-container" onSubmit={formHandler}>
        <label htmlFor="userName" >UserName</label>
        <input id="userName" type="text" ref={nameInputRef} placeholder="Enter Username" />
        <label htmlFor="collegeName">College Name</label>
        <input id="collegeName" type="text" ref={collegeInputRef} placeholder="Enter College Name" />
        <label htmlFor="password" >Age</label>
        <input id="password" type="number" ref={ageInputRef} placeholder="Enter age" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Form;
