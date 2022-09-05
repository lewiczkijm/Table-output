import React, { useEffect, useState } from "react";
import "./App.scss";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

function App() {
  const [options, setOptions] = useState<Array<{ label: string }>>([]);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({ label: Math.random().toString() });
    }
    setOptions(arr);
  }, []);
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
