"use client";
import React from "react";

import styles from "./projectslayout.module.css";
import ProjectCard from "../ProjectCard";
import ProjectDataCard from "../ProjectDataCard";

import { PROJECTS } from "../../constants.js";

function ProjectsLayout() {
  const [isActive, setIsActive] = React.useState(0);

  const cardToggleHandler = (index) => {
    setIsActive(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.projectWrapper}>
        {PROJECTS.map((project, index) => (
          <ProjectDataCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsLayout;
