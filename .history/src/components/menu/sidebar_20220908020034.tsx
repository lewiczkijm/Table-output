import React from "react";
import logo from "./logo.svg";
import dividerImg from "./divider.svg";
import iconOrder from "./icons/orders.svg";
import iconcargos from "./icons/cargos.svg";
import iconPorts from "./icons/ports.svg";
import iconUsers from "./icons/users.svg";
import iconCompanies from "./icons/companies.svg";

const Divider = () => (
  <div className="divider">
    <img src={dividerImg} />
  </div>
);

const MenuItem = ({ label, Icon, href }: { label: string; Icon: any; href?: string }) => (
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
        <MenuItem label="Все заказы" Icon={<img src={iconOrder} />} />
        <MenuItem label="Все грузы" Icon={<img src={iconcargos} />} />
        <MenuItem label="порты" Icon={<img src={iconPorts} />} />
        <MenuItem label="Пользователи" Icon={<img src={iconUsers} />} />
        <Divider />
        <MenuItem label="Все Организации" Icon={<img src={iconCompanies} />} />
        <Divider />
      </ul>
    </div>
  );
};
