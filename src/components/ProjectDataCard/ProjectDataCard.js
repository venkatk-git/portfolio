import React from "react";

import styles from "./ProjectDataCard.module.css";

import { Icon } from "@iconify/react";

function ProjectDataCard({ project }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectImg}>
        <img src={project.img} />
      </div>
      <div className={styles.projectDetails}>
        <div className={styles.projectInfo}>
          <h1 className={styles.title}>{project.title}</h1>
          <div className={styles.stack}>{project.stack}</div>
        </div>
        <div className={styles.projectCodebase}>
          <a href={project.link}>
            <Icon icon="ant-design:github-filled" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDataCard;
