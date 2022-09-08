import React from "react";
import logo from "./logo.svg";
import dividerImg from "./divider.svg";
import iconOrder from "./icons/orders.svg";

const Divider = () => (
  <div className="divider">
    <img src={dividerImg} />
  </div>
);

const MenuItem = ({ label, Icon, href }: { label: string; Icon: React.ElementType; href?: string }) => (
  <li className="menuItem">
    <a href={href}>
      <Icon />
      <span>{label}</span>
    </a>
  </li>
);

export const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebarHeader">
        <img src={logo} />
        <div style={{ width: 210, height: 60, background: "#cccccc" }}></div>
      </div>
      <ul className="sidebarBody">
        <Divider />
        <Divider />
      </ul>
    </div>
  );
};
