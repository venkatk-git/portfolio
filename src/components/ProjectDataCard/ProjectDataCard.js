import React from "react";

import styles from "./ProjectDataCard.module.css";

import { Icon } from "@iconify/react";

function ProjectDataCard({ project }) {
    return (
        <div className={styles.wrapper}>
            <a
                href={project.link}
                className={styles.innerWrapper}
                target="_blank"
                style={{ "--project-bg": project.bgColor }}
            >
                <div className={styles.projectDescription}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
                <div className={styles.filler} />
                <img src={project.img} className={styles.projectImg} />
            </a>
        </div>
    );
}

export default ProjectDataCard;
