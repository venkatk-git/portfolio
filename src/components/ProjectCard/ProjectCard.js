"use client";
import React from "react";

import { motion } from "framer-motion";

//Stylesheet
import styles from "./projectcard.module.css";

function ProjectCard({ project, isActive, cardToggleHandler, ...props }) {
  const { title, description } = project;

  return (
    <motion.div
      className={`${styles.wrapper} ${isActive ? styles.active : ""}`}
      onClick={cardToggleHandler}
      initial={false}
      animate={{
        flex: isActive ? 4 : 1,
      }}
      transition={{
        type: "spring",
        duration: 0.15,
        stiffness: 100,
        damping: 20,
        ease: "easeIn",
      }}
    >
      <div className={styles.cardWrapper} {...props}></div>
    </motion.div>
  );
}

export default ProjectCard;
