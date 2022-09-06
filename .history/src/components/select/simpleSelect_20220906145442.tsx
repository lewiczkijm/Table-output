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

  const select = (value: any) => {
    setOpen(false);
    onChange(value);
  };

  const rootEl = useRef(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // @ts-ignore
      if (!rootEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <label ref={rootEl} className="simpleSelect">
      <div ref={inputRef} onMouseDown={() => setOpen(true)} className={`input d-flex ${open ? "active" : ""}`}>
        <div className="flex-grow-1 content">
          {value ? (
            <>
              {value.color && (
                <span className="colorized" style={{ background: value.color }}>
                  {" "}
                </span>
              )}
              <span>{value.label}</span>
            </>
          ) : (
            placeholder
          )}
        </div>
        <div className={`d-flex align-items-center button`}>
          <img className={open ? "active" : ""} src={btn} />
        </div>
      </div>
      {open && (
        <ul style={{ width }} className="dropdown-menu">
          {options.map((option) => (
            <li onClick={() => select(option)}>{option.label}</li>
          ))}
        </ul>
      )}
    </label>
  );
};
