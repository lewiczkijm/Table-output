import React, { useEffect, useState } from "react";
import "./App.scss";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Col, Row } from "reactstrap";
import { Elements } from "./elements";

function App() {
  return (
    <div className="App">
      <Row noGutters>
        <Col style={{ width: 270 }}>1</Col>
        <Col>
          <Elements />
        </Col>
      </Row>
    </div>
  );
}

export default App;
