import React from "react";
import "./App.css";
import { Typeahead } from "react-bootstrap-typeahead";

function App() {
  return (
    <div className="App">
      <Typeahead onChange={() => {}} options={[{ label: "srgrg" }, { label: "rthth" }]} placeholder="Choose a state..." />
    </div>
  );
}

export default App;
