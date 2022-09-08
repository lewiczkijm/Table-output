import React from "react";
import logo from "./logo.svg";
import dividerImg from "./divider.svg";
import iconOrder from "./icons/orders.svg";
import iconcargos from "./icons/cargos.svg";
import iconPorts from "./icons/ports.svg";
import iconUsers from "./icons/users.svg";
import iconCompanies from "./icons/companies.svg";
import { ButtonAdd } from "../buttons";

const Divider = () => (
  <div className="divider">
    <img src={dividerImg} />
  </div>
);

const MenuItem = ({ label, icon, href }: { label: string; icon: any; href?: string }) => (
  <li className="menuItem">
    <a href={href}>
      <img src={icon} />
      <span>{label}</span>
    </a>
  </li>
);

export const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebarHeader">
        <img src={logo} />
        <div>
          <ButtonAdd onClick={() => {}} />
        </div>
      </div>
      <ul className="sidebarBody">
        <MenuItem href="alko" label="Все заказы" icon={iconOrder} />
        <MenuItem href="alko" label="Все грузы" icon={iconcargos} />
        <MenuItem href="alko" label="порты" icon={iconPorts} />
        <MenuItem href="alko" label="Пользователи" icon={iconUsers} />
        <Divider />
        <MenuItem href="alko" label="Все Организации" icon={iconCompanies} />
        <MenuItem href="alko" label="Все Организации" icon={iconCompanies} />
        <Divider />
        <MenuItem href="alko" label="Все Организации" icon={iconCompanies} />
        <MenuItem href="alko" label="Все Организации" icon={iconCompanies} />
        <MenuItem href="alko" label="Все Организации" icon={iconCompanies} />
      </ul>
    </div>
  );
};
