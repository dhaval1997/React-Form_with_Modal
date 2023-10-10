import React from "react";
import Button from "./Button";
import ReactDOM from "react-dom";

const OverlayModal = (props) => {
  return (
    <div className="modal">
      <header className="header">
        <h1>{props.title}</h1>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="action">
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </div>
  );
};

const BackDrop = (props) => {
  return <div className="back-drop" onClick={props.onConfirm} />;
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById("backDrop-root")
      )}
      {ReactDOM.createPortal(
        <OverlayModal title={props.title} message={props.message} onConfirm={props.onConfirm} />,
        document.getElementById("overlayModal-root")
      )}
    </>
  );
};

export default ErrorModal;
