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
    <div onMouseLeave={() => setOpen(false)} className="simpleSelect">
      <div onMouseDown={() => setOpen(true)} ref={inputRef} className={`input d-flex ${open ? "active" : ""}`}>
        <div className="flex-grow-1"></div>
        <div className={`d-flex align-items-center button`}>
          <img className={open ? "active" : ""} src={btn} />
        </div>
      </div>
      {open && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li></li>
          ))}
        </ul>
      )}
    </div>
  );
};