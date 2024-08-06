import React from "react";

import Browser from "../Browser";

import styles from "./projects.module.css";
function Projects() {
  return (
    <div className={styles.wrapper} id="projects">
      <div className={styles.sectionWrapper}>
        <div className={styles.movingBorderBox}>
          <Browser />
        </div>
      </div>
    </div>
  );
}

export default Projects;
