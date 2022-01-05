import React from "react";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout-content">
      <div className="background-bar"></div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Layout;
