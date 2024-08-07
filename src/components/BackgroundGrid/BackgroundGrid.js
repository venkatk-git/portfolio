"use client";
import React from "react";

import getRandomInt from "@/helpers/getRandomInt";

import styles from "./backgroundGrid.module.css";

function selectRandomDiv(size) {
  return getRandomInt(size - 100);
}

function BackgroundGrid({ size, ...props }) {
  React.useEffect(() => {
    const gridItems = Array.from(
      document.getElementsByClassName(styles.gridWrapper)[0].children
    );

    const Interval = setInterval(() => {
      gridItems.forEach((el, i) => {
        el.classList.remove(styles.flicker);
        const randomIndex = selectRandomDiv(size);
        if (i === randomIndex || i % randomIndex === 0) {
          el.classList.add(styles.flicker);
        }
      });
    }, 1000);

    return () => clearInterval(Interval);
  }, []);

  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.gridWrapper}>
        {[...Array(size)].map((el, index) => {
          return <div className={styles.girdItem} key={index} />;
        })}
      </div>
    </div>
  );
}

export default React.memo(BackgroundGrid);
