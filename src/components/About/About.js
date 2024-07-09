import React from "react";
import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.wrapper} id="about">
      <div className={styles.main}>
        <img src=""></img>
        <p>
          Hello! I&apos;m <span className={styles.italic}>Venkat Kumar</span>,
          current III year student at Bannari Amman Institute of Technology. I
          create websites that solve real-world problems, transforming ideas
          into interactive digital experiences. My portfolio showcases projects
          addressing everyday challenges. Committed to continuous learning, I
          stay updated with modern web technologies and deployment practices. I
          thrive in collaborative environments, tackling challenges with
          adaptability and creativity. I aspire to contribute to impactful tech
          projects, making a positive difference with my web development
          expertise. Feel free to explore my portfolio and reach out to connect!
        </p>
      </div>
      <div className={styles.right}>
        <h1>😃</h1>
      </div>
    </div>
  );
}

export default About;
