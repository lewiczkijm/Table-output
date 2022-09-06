import React, { useState } from "react";

import { Typeahead } from "react-bootstrap-typeahead";
import btn from "./btn.svg";
import qestion from "./qestion.svg";

export type SelectType = {
  options: any[];
  onChange: (selected: any[]) => void;
  selected?: any[];
  title?: string;
  placeholder?: string;
};

export const Autocomplite = ({ options, onChange, selected, title, placeholder }: SelectType) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <label className="select">
      <Typeahead
        placeholder={placeholder}
        onChange={onChange}
        renderInput={({ inputRef, referenceElementRef, onFocus, onBlur, ...inputProps }) => {
          return (
            <div
              className="input"
              ref={(element) => {
                referenceElementRef(element);
              }}
            >
              <div style={{ paddingLeft: 12 }} className="d-flex flex-grow-1 flex-column justify-content-between">
                <span className="title d-flex align-items-center">
                  <span>{title}</span>
                  <img style={{ position: "relative", marginLeft: 10, top: -1 }} src={qestion} />
                </span>
                <input
                  onFocus={(e) => {
                    if (onFocus) onFocus(e);
                    setIsFocus(true);
                  }}
                  onBlur={(e) => {
                    if (onBlur) onBlur(e);
                    setIsFocus(false);
                  }}
                  ref={(input) => {
                    inputRef(input);
                  }}
                  {...inputProps}
                />
              </div>
              {/* @ts-ignore */}
              <div onMouseDown={(e) => onFocus(e)} className={`d-flex align-items-center button`}>
                <img className={isFocus ? "active" : ""} src={btn} />
              </div>
            </div>
          );
        }}
        selected={selected}
        options={options}
      />
    </label>
  );
};
