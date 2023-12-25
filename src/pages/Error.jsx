import React from "react";
import { useRouteError } from "react-router-dom";
// import "./Error.css"; // Assuming the CSS file is named Error.css and is in the same directory

const Error = () => {
  const Err = useRouteError();
  console.log(Err);
  return (
    <div className="error-container">
      <div className="error-content">
        <h2>
          {Err.status}: &nbsp; <span>{Err.statusText}</span>
        </h2>
        <p>{Err.data}</p>
      </div>
    </div>
  );
};

export default Error;
