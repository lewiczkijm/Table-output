import React, { useEffect, useState } from "react";
import "./App.scss";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Select } from "./components/Select";
import { Button } from "./components/Button";

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
      <div style={{ width: 280, padding: 10 }}>
        <Select title="My name" placeholder="Выберите порт" options={options} onChange={() => {}} />
      </div>
      <div style={{ width: 280, padding: 10 }}>
        <Button title="ABCD" onClick={() => {}} /> <Button title="ABCD" primary onClick={() => {}} />
      </div>
    </div>
  );
}

export default App;
