import React from "react";
import "./button.scss";
export type ButtonProps = {
  title: string;
  onClick: () => void;
  primary: boolean;
};
export const Button = ({ title, onClick, primary }: ButtonProps) => {
  return (
    <button className={`button ${primary ? "primary" : ""}`} onClick={onClick}>
      {title}
    </button>
  );
};
