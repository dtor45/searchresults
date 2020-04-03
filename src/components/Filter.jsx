import React from "react";
import styles from "./filter.module.css";

class Filter extends React.Component {
  state = {};

  mapReleaseYearsOptions = () => {
    const arrayOfYears = this.props.results.map(this.mapReleaseYears);

    const setOfYears = new Set(arrayOfYears);

    const arrOfOptions = [...setOfYears].map(this.mapOptions);

    return arrOfOptions;
  };

  mapReleaseYears = resultObj => {
    return resultObj.releaseYear;
  };

  mapGenres = resultObj => {
    return resultObj.genre;
  };

  mapRatings = resultObj => {
    return resultObj.rating;
  };

  mapOptions = item => {
    return (
      <option key={`key_${item}`} value={`${item}`} multiple>
        {item}
      </option>
    );
  };

  mapGenreOptions = () => {
    const arrayOfGenres = this.props.results.map(this.mapGenres);

    const setOfGenres = new Set(arrayOfGenres);

    const arrOfOptions = [...setOfGenres].map(this.mapOptions);

    return arrOfOptions;
  };

  mapRatingOptions = () => {
    const arrayOfRatings = this.props.results.map(this.mapRatings);

    const setOfRatings = new Set(arrayOfRatings);

    const arrOfOptions = [...setOfRatings].map(this.mapOptions);

    return arrOfOptions;
  };

  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-end">
          <label htmlFor="sort">Sort by: </label>
          <select id="sort" name="sort" className={styles.selectConfig}>
            <option value="A-Z">A-Z</option>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <div>
          <label htmlFor="releaseYear" className="mr-1">
            Release Year
          </label>
          <select id="releaseYear" name="releaseYear" className="mr-2">
            <option value="select">Select...</option>
            {this.mapReleaseYearsOptions()}
          </select>
          <label htmlFor="genre" className="mr-1">
            Genre
          </label>
          <select id="genre" name="genre" className="mr-2">
            <option value="select">Select...</option>
            {this.mapGenreOptions()}
          </select>
          <label htmlFor="rating" className="mr-1">
            Rating
          </label>
          <select id="rating" name="rating">
            <option value="select">Select...</option>
            {this.mapRatingOptions()}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
