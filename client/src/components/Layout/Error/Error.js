import React from "react";
import "../../Home/Home.css";

const Error = ({ message }) => (
  <div className="no-results">
    <div className="no-results-image">
      <img
        width="400"
        height="300"
        alt="An error occured"
        src="error.png"
        title="Unexpected Error"
      />
    </div>
    <h3>An error occured 😔</h3>
    <p>{message}</p>
  </div>
);

export default Error;
