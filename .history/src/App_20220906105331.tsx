import React, { useEffect, useState } from "react";
import "./App.scss";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Select } from "./components/select";
import { ButtonFile, ButtonLarge, ButtonSmall } from "./components/buttons";
import copy from "./copy.svg";

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
      <div style={{ width: 800, padding: 10 }}>
        <ButtonLarge title="ABCD" onClick={() => {}} /> <ButtonLarge title="ABCD" primary onClick={() => {}} />
        <ButtonSmall icon={<img src={copy} />} title={"редактировать"} onClick={() => {}} /> <ButtonSmall title={"разделить груз"} primary onClick={() => {}} />
        <ButtonFile title="Добавить" onChange={console.log} />
      </div>
    </div>
  );
}

export default App;
