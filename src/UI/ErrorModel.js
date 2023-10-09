import React from "react";
import Button from "./Button";

const ErrorModel = (props) => {
  return (
    <div>
      <div className="back-drop" onClick={props.onConfirm} />
      <div className="modal">
        <header className="header">
          <h1>{props.title}</h1>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="action">
          <Button onClick={props.onConfirm} >Ok</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModel;
