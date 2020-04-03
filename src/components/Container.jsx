import React from "react";
import Header from "./Header.jsx";
import Filter from "./Filter.jsx";
import Results from "./Results.jsx";
import * as searchResultsService from "../services/searchResultsService";

class Container extends React.Component {
  state = {
    listOfProd: [],
    resultsToDisplay: [],
    activeSelection: "all"
  };

  componentDidMount() {
    searchResultsService
      .getAll()
      .then(this.getAllSuccess)
      .catch(this.getAllError);
  }

  getAllSuccess = response => {
    const listOfProd = response.data;

    this.setState(() => {
      return { listOfProd, resultsToDisplay: listOfProd };
    });
  };

  getAllError = err => {
    console.log(err);
  };

  displayFilteredResults = page => {
    if (page === "all") {
      this.setState(prevState => {
        return {
          resultsToDisplay: prevState.listOfProd,
          activeSelection: "all"
        };
      });
    } else {
      let resultsToDisplay = [];
      const listOfProd = [...this.state.listOfProd];

      for (let i = 0; i < listOfProd.length; i++) {
        if (listOfProd[i].contentType.toLowerCase() === page) {
          resultsToDisplay.push(listOfProd[i]);
        }
      }

      this.setState(() => {
        return { resultsToDisplay, activeSelection: page };
      });
    }
  };

  render() {
    const { resultsToDisplay } = this.state;

    return (
      <React.Fragment>
        <Header
          filter={this.displayFilteredResults}
          activeSelection={this.state.activeSelection}
        />
        <Filter results={resultsToDisplay} />
        <Results results={resultsToDisplay} />
      </React.Fragment>
    );
  }
}

export default Container;
