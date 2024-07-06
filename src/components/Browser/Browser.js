import React from "react";

import styles from "./browser.module.css";
import { FaAngleDown } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { VscChromeMaximize } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";

function Browser() {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navList}>
        <div className={styles.dropDown}>
          <FaAngleDown />
        </div>
        <ul className={styles.tapName}>
          <li className={styles.tabTitle}>Featured Projects</li>
          <li className={styles.tabClose}>
            <IoCloseOutline />
          </li>
        </ul>
        {/* <div className={styles.filler} /> */}
        <ul className={styles.navBtns}>
          <li>
            <VscChromeMinimize />
          </li>
          <li>
            <VscChromeMaximize />
          </li>
          <li className={styles.close}>
            <IoCloseOutline />
          </li>
        </ul>
      </nav>
      <div className={styles.content}></div>
    </div>
  );
}

export default Browser;
