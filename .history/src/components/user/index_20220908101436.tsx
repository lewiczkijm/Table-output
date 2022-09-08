import React from "react";
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
  children: JSX.Element;
};
export const Round: React.FC<RoundType> = ({ children, size = 52, color = "#ADB4C2" }) => {
  return (
    <div style={{ width: size, height: size, background: color }} className="round">
      {children}
    </div>
  );
};
