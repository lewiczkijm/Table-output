import React, { SyntheticEvent } from "react";
import "./input.scss";
import search from "./search.svg";
export type InputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (e: SyntheticEvent) => void;
};
export const InputFind = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <div className="findInput">
      <img src={search} />
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
