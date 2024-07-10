import React from "react";

import styles from "./projectCard.module.css";
function ProjectCard({ isActive, cardToggleHandler, ...deleagated }) {
  return (
    <div
      className={`${styles.wrapper} ${isActive ? styles.active : ""}`}
      onClick={cardToggleHandler}
    ></div>
  );
}

export default ProjectCard;
