import React from "react";
import "./App.css";
import Typeahead from "react-bootstrap-typeahead/types/core/Typeahead";

function App() {
  return (
    <div className="App">
      <Typeahead onChange={() => {}} options={["1", "2", "3"]}>
        <input />
      </Typeahead>
    </div>
  );
}

export default App;
