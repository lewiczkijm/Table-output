import React from "react";
import logo from "./logo.svg";
import dividerImg from "./divider.svg";

const Divider = () => (
  <div className="divider">
    <img src={dividerImg} />
  </div>
);

const MenuItem = ({ label, Icon }: { label: string; Icon: React.ElementType }) => (
  <div className="menuItem">
    <Icon />
    <span>{label}</span>
  </div>
);

export const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebarHeader">
        <img src={logo} />
        <div style={{ width: 210, height: 60, background: "#cccccc" }}></div>
      </div>
      <div className="sidebarBody">
        <Divider />
        <Divider />
      </div>
    </div>
  );
};
