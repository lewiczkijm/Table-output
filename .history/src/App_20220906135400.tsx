import React, { useEffect, useState } from "react";
import "./App.scss";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Autocomplite } from "./components/select";
import { ButtonFile, ButtonLarge, ButtonSmall } from "./components/buttons";
import copy from "./copy.svg";
import { InputFind } from "./components/input";
import { SimpleSelect } from "./components/select/simpleSelect";

function App() {
  const [options, setOptions] = useState<Array<{ label: string }>>([]);

  const [selected, select] = useState<any>(undefined);

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
        <Autocomplite title="My name" placeholder="Выберите порт" options={options} onChange={() => {}} />
      </div>
      <div style={{ width: 280, padding: 10 }}>
        <SimpleSelect
          onChange={select}
          value={selected}
          options={[
            { label: "Новый" },
            { label: "Назначен ответственный менеджер" },
            { label: "Расчет стоимости заказа" },
            { label: "Рассчитана стоимость заказа" },
            { label: "Груз принят в порту отправления" },
            { label: "Груз размещен на судне" },
            { label: "Груз доставлен в порт назначения" },
          ]}
        />
      </div>
      <div style={{ width: 800, padding: 10 }}>
        <ButtonLarge title="ABCD" onClick={() => {}} /> <ButtonLarge title="ABCD" primary onClick={() => {}} />
        <ButtonSmall icon={<img src={copy} />} title={"редактировать"} onClick={() => {}} /> <ButtonSmall title={"разделить груз"} primary onClick={() => {}} />
        <ButtonFile title="Добавить" onChange={console.log} />
      </div>
      <div style={{ width: 300, padding: 10 }}>
        <InputFind placeholder="Найти коносамент, груз, заказ и др." />{" "}
      </div>
    </div>
  );
}

export default App;
