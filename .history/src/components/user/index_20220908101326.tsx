import React from "react";
export const UserPane = () => {
  return <div></div>;
};

export const UserInfo = ({}) => {
  return <></>;
};

export type RoundType = {
  size: number;
  color?: string;
  children: JSX.Element;
};
export const Round: React.FC<RoundType> = ({ children, size, color = "#ADB4C2" }) => {
  return (
    <div style={{ width: size, height: size, background: color }} className="round">
      {children}
    </div>
  );
};