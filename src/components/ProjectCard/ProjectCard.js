"use client";
import React from "react";

import { motion } from "framer-motion";

import styles from "./projectCard.module.css";
function ProjectCard({ isActive, cardToggleHandler, ...deleagated }) {
  return (
    <motion.div
      className={`${styles.wrapper} ${isActive ? styles.active : ""}`}
      onClick={cardToggleHandler}
      initial={{ flex: 1 }}
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
      <motion.div
        initial={{ backgroundPosition: "center" }}
        // animate={{
        //   backgroundPosition: isActive ? "revert" : "center",
        // }}
        // transition={{
        //   type: "spring",
        //   duration: 0.15,
        //   stiffness: 100,
        //   damping: 20,
        //   ease: "easeInOut",
        // }}
        className={styles.cardWrapper}
      ></motion.div>
    </motion.div>
  );
}

export default ProjectCard;
