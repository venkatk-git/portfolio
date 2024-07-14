"use client";
import React from "react";

import { GRID_SIZE } from "@/constants";
import getRandomInt from "@/helpers/getRandomInt";

import styles from "./backgroundGrid.module.css";

function selectRandomDiv() {
  return getRandomInt(GRID_SIZE - 100);
}

function BackgroundGrid() {
  React.useEffect(() => {
    const gridItems = Array.from(
      document.getElementsByClassName(styles.gridWrapper)[0].children
    );

    const Interval = setInterval(() => {
      gridItems.forEach((el, i) => {
        el.classList.remove(styles.flicker);
        const randomIndex = selectRandomDiv();
        if (i === randomIndex || i % randomIndex === 0) {
          el.classList.add(styles.flicker);
        }
      });
    }, 1000);

    return () => clearInterval(Interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.gridWrapper}>
        {[...Array(GRID_SIZE)].map((el, index) => {
          return <div className={styles.girdItem} key={index} />;
        })}
      </div>
    </div>
  );
}

export default BackgroundGrid;
