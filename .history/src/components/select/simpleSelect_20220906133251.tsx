import React, { ReactNode, useRef, useState } from "react";
import btn from "./btn.svg";

export type SimpleSelectProps = {
  value?: any;
  onChange: (value: any) => void;
  options: any[];
};
export const SimpleSelect = ({ value, onChange, options }: SimpleSelectProps) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  return (
    <label className="simpleSelect">
      <div ref={inputRef} className={`input d-flex ${open ? "active" : ""}`}>
        <div className="flex-grow-1">
          <input onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} />
        </div>
        <div className={`d-flex align-items-center button`}>
          <img className={open ? "active" : ""} src={btn} />
        </div>
      </div>
      {open && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li>{option.label}</li>
          ))}
        </ul>
      )}
    </label>
  );
};
