import React from "react";
import logo from "./logo.svg";
import dividerImg from "./divider.svg";

const Divider = () => (
  <div className="divider">
    <img src={dividerImg} />
  </div>
);

export const Sidebar = () => {
  return (
    <div className="sidebar ">
      <img src={logo} />
      <Divider />
      <Divider />
    </div>
  );
};
