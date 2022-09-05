import React from "react";

import { Typeahead } from "react-bootstrap-typeahead";

import "react-bootstrap-typeahead/css/Typeahead.css";

export type SelectType = {
  options: Array<any>;
};

export const Select = ({ options }: SelectType) => {
  return (
    <Typeahead
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
      onChange={() => {}}
      options={options}
      placeholder="Choose a state..."
    />
  );
};
