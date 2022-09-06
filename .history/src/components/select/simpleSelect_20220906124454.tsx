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
    <div className="simpleSelect">
      <div ref={inputRef} className="input d-flex">
        <div className="flex-grow-1"></div>
        <div className={`d-flex align-items-center button`}>
          <img className={open ? "active" : ""} src={btn} />
        </div>
      </div>
      {open && options.map((option) => <div></div>)}
    </div>
  );
};
