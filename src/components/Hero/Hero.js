import React from "react";
import styles from "./hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          Transforming Concepts into Cutting-Edge, Responsive Web Solutions,
          <span className={styles.italic}> Venkat</span>
        </h1>

        <p className={styles.description}>
          And turn ideas into innovative, high-performance web solutions.
        </p>

        <button className={styles.contactBtn}>Contact</button>
        <div className={styles.gradientMerger} />
      </div>
    </>
  );
}

export default Hero;
