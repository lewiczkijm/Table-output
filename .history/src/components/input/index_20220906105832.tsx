import React, { SyntheticEvent } from "react";

export type InputProps = {
  value?: string;
  onChange?: (e: SyntheticEvent) => void;
};
export const InputFind = ({ value, onChange }: InputProps) => {
  return <input className="findInput" value={value} onChange={onChange} />;
};
