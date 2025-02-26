"use client";
import React from "react";
import styles from "./about.module.css";

import Image from "next/image";
import { Icon } from "@iconify/react";

function addAnimation() {
    const scroller = document.querySelector(`.${styles.scroller}`);
    scroller.setAttribute("data-animated", true);
}

function About() {
    React.useEffect(() => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }
    });

    return (
        <div className={styles.wrapper} id="about">
            <div className={styles.sectionHeading}>
                <h1 className={styles.sectionTitle}>About me</h1>
                <h3 className={styles.sectionSubline}>
                    Passionate Innovator and Collaborative Team Player
                </h3>
            </div>
            <div className={styles.gridWrapper} id="about">
                <div className={`${styles.main} ${styles.gridItems}`}>
                    <Image
                        src="https://raw.githubusercontent.com/venkatk-git/portfolio/main/public/assests/image.png?raw=true"
                        className={styles.profileImg}
                        width={500}
                        height={140}
                        alt=""
                    />
                    <p>
                        Hello! I&apos;m
                        <span className={styles.italic}>Venkat Kumar</span>, a
                        third-year student at Bannari Amman Institute of
                        Technology. I am passionate about learning web dev and applying
                        my skills to solve real-world problems. I enjoy
                        exploring new web technologies and continuously improving my
                        abilities through hands-on projects.
                    </p>
                </div>
                <div className={`${styles.techStack} ${styles.gridItems}`}>
                    <div
                        className={`${styles.techStackWrapper} ${styles.scroller}`}
                    >
                        {/* <h3>My Stack</h3> */}
                        <div className={styles.scroller__inner}>
                            <Icon
                                icon="skill-icons:npm-light"
                                className={styles.iconifyIcon}
                            />
                            <Icon
                                icon="skill-icons:vite-light"
                                className={styles.iconifyIcon}
                            />
                            <Icon
                                icon="skill-icons:react-light"
                                className={styles.iconifyIcon}
                            />
                            <Icon
                                icon="skill-icons:nextjs-light"
                                className={styles.iconifyIcon}
                            />
                            <Icon
                                icon="skill-icons:nodejs-light"
                                className={styles.iconifyIcon}
                            />
                            <Icon
                                icon="skill-icons:mongodb"
                                className={styles.iconifyIcon}
                            />
                            <Icon
                                icon="skill-icons:postman"
                                className={styles.iconifyIcon}
                            />
                            <Icon
                                icon="skill-icons:git"
                                className={styles.iconifyIcon}
                            />
                            <Icon
                                icon="skill-icons:github-light"
                                className={styles.iconifyIcon}
                            />
                            <Icon
                                icon="skill-icons:docker"
                                className={styles.iconifyIcon}
                            />
                            <Icon
                                icon="skill-icons:npm-light"
                                className={`${styles.iconifyIcon} ${styles.animateOnly}`}
                            />
                            <Icon
                                icon="skill-icons:vite-light"
                                className={`${styles.iconifyIcon} ${styles.animateOnly}`}
                            />
                            <Icon
                                icon="skill-icons:react-light"
                                className={`${styles.iconifyIcon} ${styles.animateOnly}`}
                            />
                            <Icon
                                icon="skill-icons:nextjs-light"
                                className={`${styles.iconifyIcon} ${styles.animateOnly}`}
                            />
                            <Icon
                                icon="skill-icons:nodejs-light"
                                className={`${styles.iconifyIcon} ${styles.animateOnly}`}
                            />
                            <Icon
                                icon="skill-icons:mongodb"
                                className={`${styles.iconifyIcon} ${styles.animateOnly}`}
                            />
                            <Icon
                                icon="skill-icons:postman"
                                className={`${styles.iconifyIcon} ${styles.animateOnly}`}
                            />
                            <Icon
                                icon="skill-icons:git"
                                className={`${styles.iconifyIcon} ${styles.animateOnly}`}
                            />
                            <Icon
                                icon="skill-icons:github-light"
                                className={`${styles.iconifyIcon} ${styles.animateOnly}`}
                            />
                            <Icon
                                icon="skill-icons:docker"
                                className={`${styles.iconifyIcon} ${styles.animateOnly}`}
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.languages} ${styles.gridItems}`}>
                    <div className={styles.languagesWrapper}>
                        <Icon
                            icon="skill-icons:c"
                            className={styles.iconifyIcon}
                        />
                        <Icon
                            icon="skill-icons:javascript"
                            className={styles.iconifyIcon}
                        />
                        <Icon
                            icon="skill-icons:java-light"
                            className={styles.iconifyIcon}
                        />
                        <Icon
                            icon="skill-icons:python-light"
                            className={styles.iconifyIcon}
                        />
                        <Icon
                            icon="skill-icons:typescript"
                            className={styles.iconifyIcon}
                        />
                    </div>
                </div>
                <div className={`${styles.objective} ${styles.gridItems}`}>
                    <p>
                        &quot;I aspire to contribute to impactful tech projects,
                        making a positive difference with my web dev
                        expertise. Feel free to explore my portfolio and reach
                        out to connect!&quot;
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
