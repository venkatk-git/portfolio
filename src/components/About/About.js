import React from "react";
import styles from "./about.module.css";

import Image from "next/image";

function About() {
  return (
    <div className={styles.wrapper} id="about">
      <h1 className={styles.sectionTitle}>About Me</h1>
      <div className={styles.gridWrapper} id="about">
        <div className={`${styles.main} ${styles.gridItems}`}>
          <Image
            src="https://raw.githubusercontent.com/venkatk-git/portfolio/main/public/assests/profile_placeholder.jpg"
            className={styles.profileImg}
            width={500}
            height={140}
            alt=""
          ></Image>
          <p>
            Hello! I&apos;m <span className={styles.italic}>Venkat Kumar</span>,
            current III year student at Bannari Amman Institute of Technology. I
            create websites that solve real-world problems, transforming ideas
            into interactive digital experiences.
          </p>
        </div>
        <div className={`${styles.techStack} ${styles.gridItems}`}>
          <h1>Stack</h1>
        </div>
        <div className={`${styles.languages} ${styles.gridItems}`}>
          <h1>List of languages</h1>
        </div>
        <div className={`${styles.objective} ${styles.gridItems}`}>
          <p>
            &quot;I aspire to contribute to impactful tech projects, making a
            positive difference with my web development expertise. Feel free to
            explore my portfolio and reach out to connect!&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
