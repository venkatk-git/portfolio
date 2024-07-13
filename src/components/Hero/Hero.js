import React from "react";
import styles from "./hero.module.css";
import NoteTag from "../NoteTag";
import BackgroundGrid from "@/components/BackgroundGrid";

function Hero() {
  const DAY = new Date().toDateString();
  return (
    <>
      <div className={styles.wrapper}>
        {/* <BackgroundGrid /> */}
        <NoteTag>Last commit on {DAY} </NoteTag>
        <h1 className={styles.heading}>
          Transforming Concepts into Cutting-Edge, Responsive Web Solutions,
          <span className={`${styles.italic} ${styles.name}`}> Venkat</span>
        </h1>

        <p className={styles.description}>
          I turn ideas into innovative, high-performance web solutions.
        </p>

        <button className={styles.contactBtn}>Contact</button>
        <div className={styles.gradientMerger} />
      </div>
    </>
  );
}

export default Hero;
