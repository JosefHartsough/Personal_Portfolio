import React from "react";
import { Link, navigate } from "gatsby";
import * as navigationStyles from "../styles/NavigationBar/NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <div>
      <div className={navigationStyles.navigationContainer}>
        <h1
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", marginLeft: "10px" }}
        >
          JH
        </h1>
        <ul className={navigationStyles.listContainer}>
          <li className={navigationStyles.listItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={navigationStyles.listItem}>
            <Link to="/">Projects</Link>
          </li>
          <li className={navigationStyles.listItem}>
            <a href="/">Resume</a>
          </li>
          <li className={navigationStyles.listItem}>
            <a href="mailto:email@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
