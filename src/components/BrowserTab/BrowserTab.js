import React from "react";

import { IoCloseOutline } from "react-icons/io5";

import styles from "./browserTab.module.css";

function BrowserTab({ children, ...delegated }) {
  return (
    <ul className={styles.wrapper} {...delegated}>
      <li className={styles.tabTitle}>{children}</li>
      <li className={styles.tabCloseBtn}>
        <IoCloseOutline />
      </li>
    </ul>
  );
}

export default BrowserTab;
