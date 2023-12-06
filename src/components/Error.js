import React from "react";
import "../css/Error.css";

const ErrorModal = (props) => {
  const ErrorHandler = () => {
    props.onCancel();
  };
  return (
    <div className="error">
      <header>Error Occured</header>
      <div className="error-body">
        <p>{props.error}</p>
      </div>
      <button onClick={ErrorHandler}>Close</button>
    </div>
  );
};

export default ErrorModal;
