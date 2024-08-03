"use client";
import React from "react";

import { motion } from "framer-motion";

import styles from "./projectcard.module.css";
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
      <div className={styles.cardWrapper}>
        <div className={styles.cardLeft}></div>
        {isActive && (
          <div className={styles.cardRight}>
            <div className={styles.projectContext}>
              <p>
                This Campus Management System is a full-stack application
                developed to address various challenges faced by the
                college&apos;s Campus Management Team. The team needed an
                efficient solution for maintaining logs, assigning tasks,
                tracking work status, and managing the workforce, including
                workers and supervisors. Leveraging my web development skills, I
                created a comprehensive dashboard that streamlines these
                processes. The project was built using the MEVN stack (MongoDB,
                Express.js, Vue.js, Node.js). Although I was initially
                unfamiliar with Vue.js, I quickly learned and applied it to
                deliver a robust and user-friendly system that meets the
                team&apos;s requirements. This project not only helped solve a
                real-world problem but also expanded my expertise in full-stack
                development and Vue.js.
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
