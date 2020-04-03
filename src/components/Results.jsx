import React from "react";
import { Row } from "reactstrap";
import SingleResult from "./SingleResult.jsx";

class Results extends React.Component {
  state = {
    results: []
  };

  displayResults = () => {
    let { results } = this.props;
    let display = results.map(this.mapSingleResult);
    return display;
  };

  mapSingleResult = resultObj => {
    return (
      <SingleResult key={`SingleResult-${resultObj.id}`} obj={resultObj} />
    );
  };

  render() {
    return (
      <Row className="mt-3">
        {!this.props.results ? <p>Loading</p> : this.displayResults()}
      </Row>
    );
  }
}

export default Results;
