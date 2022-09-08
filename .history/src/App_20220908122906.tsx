import React, { useEffect, useState } from "react";
import "./App.scss";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Col, Row } from "reactstrap";
import { Elements } from "./elements";
import { Fotter, Sidebar } from "./components/menu";
import { Header } from "./components/menu/header";
import { Autocomplite } from "./components/select";
import { Datepicker } from "./components/select/datepicker";
import { ButtonLarge } from "./components/buttons";
import exampleData from "./exampleData.json";
import { Table } from "./components/table";
import { CargoDocumentType } from "./components/document/documentType";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <div className="d-flex flex-column justify-content-between article">
        <Header />
        <div className="d-flex">
          <div style={{ width: 373, paddingRight: 10 }}>
            <Autocomplite title="My name" placeholder="Выберите порт" options={[]} onChange={() => {}} />
          </div>
          <div style={{ width: 250, paddingRight: 10 }}>
            <Autocomplite title="My name" placeholder="Статус" options={[]} onChange={() => {}} />
          </div>
          <div style={{ width: 250, paddingRight: 10 }}>
            <Datepicker title="Дата поступления в порт" value={undefined} onChange={(d: any) => console.log(d)} />
          </div>
          <div style={{ paddingRight: 10 }}>
            <ButtonLarge title="Сбросить" onClick={() => {}} />
          </div>
          <div style={{ paddingRight: 10 }}>
            <ButtonLarge title="Применить" primary onClick={() => {}} />
          </div>
        </div>
        <div style={{ width: 1550 }}>
          <Table data={exampleData as CargoDocumentType[]} Document={<></>} />
        </div>

        <Elements />
        <Fotter />
      </div>
    </div>
  );
}

export default App;
