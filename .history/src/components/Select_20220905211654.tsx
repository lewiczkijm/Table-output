import React from "react";

import { Typeahead } from "react-bootstrap-typeahead";

import "react-bootstrap-typeahead/css/Typeahead.css";

export type SelectType = {
  options: any[];
  onChange: (selected: any[]) => void;
};

export const Select = ({ options, onChange }: SelectType) => {
  return (
    <Typeahead
      onChange={onChange}
      renderInput={({ inputRef, referenceElementRef, ...inputProps }) => {
        return (
          <div>
            1234
            <input
              ref={(input) => {
                inputRef(input);
                referenceElementRef(input);
              }}
              {...inputProps}
            />
          </div>
        );
      }}
      options={options}
      placeholder="Choose a state..."
    />
  );
};
