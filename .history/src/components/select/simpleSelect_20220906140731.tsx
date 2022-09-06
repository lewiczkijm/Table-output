import React, { ReactNode, SyntheticEvent, useEffect, useRef, useState } from "react";
import btn from "./btn.svg";

export type SimpleSelectProps = {
  value?: any;
  placeholder?: string;
  onChange: (value: any) => void;
  options: any[];
};
export const SimpleSelect = ({ value, onChange, options, placeholder }: SimpleSelectProps) => {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const { width } = inputRef.current.getBoundingClientRect();
    setWidth(width);
  }, []);

  const select = (e: SyntheticEvent, value: any) => {
    e.stopPropagation();
    e.preventDefault();
    debugger;
  };

  const rootEl = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const onClick = (e) => rootEl.current.contains(e.target) || console.log("клик вне компонента");
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <label ref={rootEl} className="simpleSelect">
      <div ref={inputRef} className={`input d-flex ${open ? "active" : ""}`}>
        <div className="flex-grow-1">
          <input onFocus={() => setOpen(true)} />
          {value ? <div>{value.label}</div> : <div>{placeholder}</div>}
        </div>
        <div className={`d-flex align-items-center button`}>
          <img className={open ? "active" : ""} src={btn} />
        </div>
      </div>
      {open && (
        <ul style={{ width }} className="dropdown-menu">
          {options.map((option) => (
            <li onClick={(e) => select(e, option)}>{option.label}</li>
          ))}
        </ul>
      )}
    </label>
  );
};
