import React, { useState } from "react";
import { Menu, Typeahead } from "react-bootstrap-typeahead";
import DatePickerReact from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import qestion from "./qestion.svg";
import calendar from "./calendar.svg";
import { ru } from "date-fns/locale";

export const Datepicker = ({ onChange, title }: any) => {
  return (
    <label className="select datepicker">
      <Typeahead
        placeholder={"__.__.____"}
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
                  ref={(input) => {
                    inputRef(input);
                  }}
                  {...inputProps}
                />
              </div>
              {/* @ts-ignore */}
              <div onMouseDown={(e) => onFocus(e)} className={`d-flex align-items-center button`}>
                <img src={calendar} />
              </div>
            </div>
          );
        }}
        renderMenu={(results, { style, ...menuProps }, state) => {
          return (
            <Menu className="dateMenu" {...menuProps}>
              <DatePickerReact locale={ru} onChange={() => {}} inline />
            </Menu>
          );
        }}
        // selected={[]}
        options={[]}
      />
    </label>
  );
};
