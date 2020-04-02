import React from "react";
import styles from "./filter.module.css";

class Filter extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-end">
          <label for="sort">Sort by: </label>
          <select id="sort" name="sort" className={styles.selectConfig}>
            <option value="A-Z">A-Z</option>
          </select>
        </div>
        <div>
          <label for="releaseYear"></label>
          <select id="releaseYear" name="releaseYear"></select>
          <label for="genre"></label>
          <select id="genre" name="genre"></select>
          <label for="rating"></label>
          <select id="rating" name="rating"></select>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
