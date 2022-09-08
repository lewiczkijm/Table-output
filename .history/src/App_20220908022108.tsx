import React, { useEffect, useState } from "react";
import "./App.scss";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Col, Row } from "reactstrap";
import { Elements } from "./elements";
import { Fotter, Sidebar } from "./components/menu";

function App() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <div className="d-flex flex-column justify-content-between">
        <Elements />
        <Fotter />
      </div>
    </div>
  );
}

export default App;
