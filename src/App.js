import React from "react";
import "./App.css";
import Container from "./components/Container.jsx";
import { Row, Col } from "reactstrap";

function App() {
  return (
    <Row className="d-flex justify-content-center">
      <Col sm="8">
        <Container />
      </Col>
    </Row>
  );
}

export default App;
