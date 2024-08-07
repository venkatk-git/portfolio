"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

//Stylesheet
import styles from "./projectcard.module.css";

import { Icon } from "@iconify/react";
import BackgroundGrid from "../BackgroundGrid";

function ProjectCard({
  project,
  stack,
  isActive,
  cardToggleHandler,
  ...props
}) {
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
      <BackgroundGrid size={350} className={styles.grid} />
    </motion.div>
  );
}

export default ProjectCard;
