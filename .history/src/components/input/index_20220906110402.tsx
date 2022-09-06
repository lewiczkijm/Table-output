import React, { SyntheticEvent } from "react";
import "./input.scss";
export type InputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (e: SyntheticEvent) => void;
};
export const InputFind = ({ value, onChange, placeholder }: InputProps) => {
  return <input placeholder={placeholder} className="findInput" value={value} onChange={onChange} />;
};
