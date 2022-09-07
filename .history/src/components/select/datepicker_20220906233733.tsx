import React, { useState } from "react";
import { Menu, Typeahead } from "react-bootstrap-typeahead";
import DatePickerReact from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import qestion from "./qestion.svg";
import calendar from "./calendar.svg";
import arrow from "./arrow.svg";
import { format } from "date-fns";
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
              <div className="dateBox">
                <DatePickerReact
                  renderCustomHeader={({ date, increaseMonth, decreaseMonth }) => {
                    return (
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="header">
                          <img onClick={decreaseMonth} src={arrow} />
                          {format(date, "LLLL, yyyy", { locale: ru })}
                          <img onClick={increaseMonth} style={{ transform: "rotate(180deg)" }} src={arrow} />
                        </div>
                      </div>
                    );
                  }}
                  locale={ru}
                  onChange={() => {}}
                  inline
                />
                <div className="downside">
                  <button>Выбрать</button>
                  <button onClick={() => alert(0)}>Отмена</button>
                </div>
              </div>
            </Menu>
          );
        }}
        // selected={[]}
        options={[]}
      />
    </label>
  );
};
