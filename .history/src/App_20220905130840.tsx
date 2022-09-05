import React from "react";
import "./App.css";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

function App() {
  const options = [{ label: "srgrg" }, { label: "rthth" }, { label: "dhth" }, { label: "eryrey" }, { label: "yruytu" }];
  return (
    <div className="App">
      <div style={{ width: 280 }}>
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
      </div>
    </div>
  );
}

export default App;
