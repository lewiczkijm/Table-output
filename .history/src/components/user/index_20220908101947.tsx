import React from "react";
import "./user.scss";

export const UserPane = () => {
  return (
    <div>
      <Round>
        <div>ИИ</div>
      </Round>
    </div>
  );
};

export const UserInfo = ({}) => {
  return <></>;
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