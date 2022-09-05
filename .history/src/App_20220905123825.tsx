import React from "react";
import "./App.css";
import { Typeahead } from "react-bootstrap-typeahead";

function App() {
  return (
    <div className="App">
      <Typeahead onChange={() => {}} options={[{ label: "1" }]} />
    </div>
  );
}

export default App;
