import React from "react";
import "./Home.css";

const Home = () => (
  <div className="no-results">
    <div className="no-results-image">
      <img
        width="400"
        height="300"
        alt="Search"
        src="search.webp"
        title="Seach"
      />
    </div>
    <h3 className="home-text">
      Let's help you find your favorite <span>gifs</span> 🚀
    </h3>
  </div>
);

export default Home;
