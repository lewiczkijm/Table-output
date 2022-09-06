import React, { ReactNode } from "react";
import "./button.scss";
export type ButtonProps = {
  title: string;
  onClick: () => void;
  primary?: boolean;
  icon?: ReactNode;
};
export const ButtonLarge = ({ title, onClick, primary }: ButtonProps) => {
  return (
    <button className={`bigButton ${primary ? "primary" : ""}`} onClick={onClick}>
      {title}
    </button>
  );
};

export const ButtonSmall = ({ title, onClick, primary, icon }: ButtonProps) => {
  return (
    <button className={`smallButton ${primary ? "primary" : ""}`} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {title}
    </button>
  );
};
