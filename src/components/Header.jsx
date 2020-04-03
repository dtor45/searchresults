import React from "react";
import { Nav, NavItem, Button } from "reactstrap";
import styles from "./header.module.css";

class Header extends React.Component {
  onButtonClick = e => {
    e.preventDefault();
    const page = e.target.name;
    console.log(e.target.name);
    this.props.filter(page);
  };

  render() {
    const { activeSelection } = this.props;

    return (
      <div className="my-5">
        <div className="d-flex justify-content-between">
          <h1>Search Results</h1>
          <Nav>
            <NavItem>
              <Button
                color="link"
                name="all"
                onClick={this.onButtonClick}
                className={
                  activeSelection === "all" ? styles.buttonSelection : null
                }
              >
                All
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="link"
                name="movie"
                onClick={this.onButtonClick}
                className={
                  activeSelection === "movie" ? styles.buttonSelection : null
                }
              >
                Movies
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="link"
                name="series"
                onClick={this.onButtonClick}
                className={
                  activeSelection === "series" ? styles.buttonSelection : null
                }
              >
                TV Shows
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="link"
                name="interactive"
                onClick={this.onButtonClick}
                className={
                  activeSelection === "interactive"
                    ? styles.buttonSelection
                    : null
                }
              >
                Games/Apps
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="link"
                name="blog"
                onClick={this.onButtonClick}
                className={
                  activeSelection === "blog" ? styles.buttonSelection : null
                }
              >
                Blog
              </Button>
            </NavItem>
            <NavItem>
              <Button
                color="link"
                name="misc"
                onClick={this.onButtonClick}
                className={
                  activeSelection === "misc" ? styles.buttonSelection : null
                }
              >
                Other
              </Button>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Header;
