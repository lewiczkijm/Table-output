import React, { SyntheticEvent } from "react";
import "./input.scss";
export type InputProps = {
  value?: string;
  placeholder?: string;
  onChange?: (e: SyntheticEvent) => void;
};
export const InputFind = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <div className="findInput">
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};
