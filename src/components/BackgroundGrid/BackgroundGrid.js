import React from "react";

import styles from "./backgroundGrid.module.css";

function BackgroundGrid() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gridWrapper}>
        {[...Array(500)].map((el, index) => {
          return <div className={styles.girdItem} key={index} />;
        })}
      </div>
    </div>
  );
}

export default BackgroundGrid;
