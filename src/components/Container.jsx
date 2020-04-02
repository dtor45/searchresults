import React from "react";
import Header from "./Header.jsx";
import Filter from "./Filter.jsx";
import Results from "./Results.jsx";

class Container extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Filter />
        <Results />
      </React.Fragment>
    );
  }
}

export default Container;
