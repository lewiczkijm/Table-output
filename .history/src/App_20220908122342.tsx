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
          <div style={{ width: 250, paddingRight: 10 }}>
            <ButtonLarge title="ABCD" onClick={() => {}} />
          </div>
          <div>
            <ButtonLarge title="ABCD" primary onClick={() => {}} />
          </div>
        </div>
        <Elements />
        <Fotter />
      </div>
    </div>
  );
}

export default App;
