import React from "react";
import "./App.css";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

function App() {
  return (
    <div className="App">
      <div style={{ width: 180 }}>
        <Typeahead
          renderInput={({ inputRef, referenceElementRef, ...inputProps }) => {
            <div>
              1234
              <input {...inputProps} />
            </div>;
          }}
          onChange={() => {}}
          options={[{ label: "srgrg" }, { label: "rthth" }]}
          placeholder="Choose a state..."
        />
      </div>
    </div>
  );
}

export default App;
