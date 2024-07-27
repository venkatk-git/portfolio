"use client";
import React from "react";

import styles from "./projectslayout.module.css";
import ProjectCard from "../ProjectCard";

function ProjectsLayout() {
  const [isActive, setIsActive] = React.useState(0);

  const cardToggleHandler = (index) => {
    setIsActive(index);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.projectWrapper}>
        {[...Array(3)].map((element, index) => (
          <ProjectCard
            key={index}
            isActive={isActive === index}
            cardToggleHandler={() => cardToggleHandler(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsLayout;
