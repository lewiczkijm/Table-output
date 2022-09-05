import React from "react";

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
  return (
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
            <label className="d-flex flex-grow-1 flex-column justify-content-between">
              <span className="title">1234</span>
              <input
                ref={(input) => {
                  inputRef(input);
                }}
                {...inputProps}
              />
            </label>
            {/* @ts-ignore */}
            <div onMouseDown={(e) => inputProps.onFocus(e)} className="d-flex align-items-center button">
              <img src={btn} />
            </div>
          </div>
        );
      }}
      selected={selected}
      options={options}
      placeholder="Любой"
    />
  );
};
