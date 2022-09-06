import React, { ReactNode, useRef, useState } from "react";

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
      <div ref={inputRef} className="input"></div>
      {open && options.map((option) => <div></div>)}
    </div>
  );
};
