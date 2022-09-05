import React, { useEffect, useState } from "react";
import "./App.scss";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Select } from "./components/Select";

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
        <Select options={options} onChange={() => {}} />
      </div>
    </div>
  );
}

export default App;
