import { type } from "@testing-library/user-event/dist/type";
import React, { ReactNode, useRef } from "react";
import "./button.scss";
import attach from "./attach.svg";
import plus from "./plus.svg";

export type ButtonProps = {
  title?: string;
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

export const ButtonAdd = ({ onClick }: ButtonProps) => {
  return (
    <button className={`addButton`} onClick={onClick}>
      <img src={plus} />
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

export type ButtonFileProps = {
  title: string;
  onChange?: any;
};
export const ButtonFile = ({ title, onChange }: ButtonFileProps) => {
  const fileRef = useRef(null);

  const handleClick = () => {
    // @ts-ignore
    fileRef.current.click();
  };

  return (
    <button onClick={handleClick} className="fileAttachButton">
      <input onChange={onChange} type="file" ref={fileRef} />
      <img src={attach} />
      {title}
    </button>
  );
};
