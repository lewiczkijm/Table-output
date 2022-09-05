import React from "react";
import "./App.css";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

function App() {
  return (
    <div className="App">
      <Typeahead onChange={() => {}} options={[{ label: "srgrg" }, { label: "rthth" }]} placeholder="Choose a state..." />
    </div>
  );
}

export default App;
