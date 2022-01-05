import React from "react";
import "../../Home/Home.css";

const NoResult = () => (
  <div className="no-results">
    <div className="no-results-image">
      <img
        width="400"
        height="300"
        alt="Result not found"
        src="search-not-found.webp"
        title="Not Found"
      />
    </div>
    <h3>We couldn't connect the dots 😥</h3>
    <p>Oops, it seems we can’t find any results based on your search.</p>
  </div>
);

export default NoResult;
