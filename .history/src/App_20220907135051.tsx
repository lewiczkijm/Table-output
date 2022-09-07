import React, { useEffect, useState } from "react";
import "./App.scss";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Autocomplite } from "./components/select";
import { ButtonFile, ButtonLarge, ButtonSmall } from "./components/buttons";
import copy from "./copy.svg";
import { InputFind } from "./components/input";
import { LabelWithColor, SimpleSelect } from "./components/select/simpleSelect";
import { Datepicker } from "./components/select/datepicker";
import { Limiter, Paginator } from "./components/paginator";
import { Table } from "./components/table";

function App() {
  const [options, setOptions] = useState<Array<{ label: string }>>([]);

  const [selected, select] = useState<any>(undefined);
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({ label: Math.random().toString() });
    }
    setOptions(arr);
  }, []);

  return (
    <div className="App">
      <div style={{ width: 480, padding: 10, display: "flex" }}>
        <Autocomplite title="My name" placeholder="Выберите порт" options={options} onChange={() => {}} />
        <Datepicker title="Дата поступления в порт" value={new Date()} onChange={(d: any) => console.log(d)} />
      </div>
      <div style={{ width: 280, padding: 10 }}>
        <SimpleSelect
          onChange={select}
          value={selected}
          placeholder="Test placeholder"
          options={[
            { label: "Новый", color: "#7EEDD4" },
            { label: "Назначен ответственный менеджер", color: "#F58C2B" },
            { label: "Расчет стоимости заказа", color: "#F1F52B" },
            { label: "Рассчитана стоимость заказа", color: "#F52B2B" },
            { label: "Груз принят в порту отправления", color: "#2FF52B" },
            { label: "Груз размещен на судне", color: "#532BF5" },
            { label: "Груз доставлен в порт назначения", color: "#532BF5" },
          ]}
        />
      </div>
      <div style={{ width: 800, padding: 10 }}>
        <ButtonLarge title="ABCD" onClick={() => {}} /> <ButtonLarge title="ABCD" primary onClick={() => {}} />
        <ButtonSmall icon={<img src={copy} />} title={"редактировать"} onClick={() => {}} /> <ButtonSmall title={"разделить груз"} primary onClick={() => {}} />
        <ButtonFile title="Добавить" onChange={() => {}} />
      </div>
      <div style={{ width: 300, padding: 10 }}>
        <InputFind placeholder="Найти коносамент, груз, заказ и др." />{" "}
      </div>
      <div style={{ width: 700, padding: 10 }}>
        <Paginator count={4} selected={page} onChange={setPage} />
      </div>
      <div style={{ width: 300, padding: 10 }}>
        <Limiter value={limit} onChange={setLimit} />
      </div>
      <div style={{ width: 1550, padding: 10 }}>
        <Table />
      </div>
    </div>
  );
}

export default App;
