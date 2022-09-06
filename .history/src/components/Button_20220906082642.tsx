import React from "react";
import "./button.scss";
export type ButtonProps = {
  title: string;
  onClick: () => void;
  primary?: boolean;
};
export const ButtonLarge = ({ title, onClick, primary }: ButtonProps) => {
  return (
    <button className={`bigButton ${primary ? "primary" : ""}`} onClick={onClick}>
      {title}
    </button>
  );
};
