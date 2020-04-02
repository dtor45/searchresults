import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import styles from "./header.module.css";

class Header extends React.Component {
  render() {
    return (
      <div className="my-5">
        <div className="d-flex justify-content-between">
          <h1>Search Results</h1>
          <Nav>
            <NavItem>
              <NavLink href="#" className={styles.navLink}>
                All
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={styles.navLink}>
                Movies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={styles.navLink}>
                TV Shows
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={styles.navLink}>
                Games &amp; Apps
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={styles.navLink}>
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className={styles.navLink}>
                Other
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Header;
