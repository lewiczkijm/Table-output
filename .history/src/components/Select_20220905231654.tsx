import React, { useState } from "react";

import { Typeahead } from "react-bootstrap-typeahead";
import btn from "./btn.svg";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./select.scss";

export type SelectType = {
  options: any[];
  onChange: (selected: any[]) => void;
  selected?: any[];
};

export const Select = ({ options, onChange, selected }: SelectType) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <label>
      <Typeahead
        className="select"
        onChange={onChange}
        renderInput={({ inputRef, referenceElementRef, ...inputProps }) => {
          return (
            <div
              className="input"
              ref={(element) => {
                referenceElementRef(element);
              }}
            >
              <div style={{ paddingLeft: 12 }} className="d-flex flex-grow-1 flex-column justify-content-between">
                <span className="title">1234</span>
                <input
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  ref={(input) => {
                    inputRef(input);
                  }}
                  {...inputProps}
                />
              </div>
              {/* @ts-ignore */}
              <div onMouseDown={(e) => inputProps.onFocus(e)} className={`d-flex align-items-center button`}>
                <img className={isFocus ? "active" : ""} src={btn} />
              </div>
            </div>
          );
        }}
        selected={selected}
        options={options}
        placeholder="Любой"
      />
    </label>
  );
};
