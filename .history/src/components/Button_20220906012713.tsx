import React from "react";
import "./button.scss";
export type ButtonProps = {
  title: string;
  onClick: () => void;
};
export const Button = ({ title, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {title}
    </button>
  );
};
