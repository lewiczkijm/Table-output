import React from "react";
import "./user.scss";
import exit from "./exit.svg";
import { ManagerType } from "../document/documentType";

export const UserPane = () => {
  return (
    <div className="userPane">
      <div className="role">Менеджер</div>
      <div>
        <Round hovered>
          <div style={{ fontSize: 16, paddingTop: 2 }}>ИИ</div>
        </Round>
      </div>
      <div>
        <Round hovered>
          <img src={exit} />
        </Round>
      </div>
    </div>
  );
};

export const UserInfo = ({ firstName, lastName, curname, email, phone }: ManagerType) => {
  return (
    <div className="userInfo">
      <div className="header">Пользователь</div>
      <div className="round">
        <Round size={100} color={"#E3E6EB"}>
          <span className="ll">{`${curname[0]}${firstName[0]}`}</span>
        </Round>
      </div>
      <div className="name">{`${curname} ${firstName}`}</div>
      <div className="email">{email}</div>
      <div className="phone">{phone}</div>
    </div>
  );
};

export type RoundType = {
  size?: number;
  color?: string;
  hovered?: boolean;
  children: JSX.Element;
};
export const Round: React.FC<RoundType> = ({ children, size = 52, color = "#ADB4C2", hovered }) => {
  return (
    <div style={{ width: size, height: size, background: color }} className={`round ${hovered ? "hovered" : ""}`}>
      {children}
    </div>
  );
};
