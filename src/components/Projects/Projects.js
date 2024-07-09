import React from "react";

import Browser from "../Browser";

import styles from "./projects.module.css";
function Projects() {
  return (
    <div className={styles.wrapper} id="projects">
      <Browser />
    </div>
  );
}

export default Projects;
