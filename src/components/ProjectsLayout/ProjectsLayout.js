"use client";
import React from "react";

import styles from "./projectslayout.module.css";
import ProjectCard from "../ProjectCard";

function ProjectsLayout() {
  const [isActive, setIsActive] = React.useState(0);

  const cardToggleHandler = (index) => {
    setIsActive(index);
  };

  const PROJECTS = [
    {
      title: "Campus Management System",
      description:
        "This Campus Management System is a full-stack application developed to address various challenges faced by the college's Campus Management Team. The team needed an efficient solution for maintaining logs, assigning tasks, tracking work status, and managing the workforce, including workers and supervisors.",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.projectWrapper}>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            isActive={isActive === index}
            cardToggleHandler={() => cardToggleHandler(index)}
            project={project}
            stack={<Stack />}
          />
        ))}
      </div>
    </div>
  );
}

function Stack() {
  return <div></div>;
}

export default ProjectsLayout;
