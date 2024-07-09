import React from "react";

import styles from "./navBar.module.css";

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.blur} />
      <ul className={styles.navList}>
        <a className={styles.logo} href="#">
          V
        </a>
        <a className={styles.navItem} href="#projects">
          Projects
        </a>
        <a className={styles.navItem} href="#about">
          About
        </a>
        <a className={styles.navItem} href="#contact">
          Contact
        </a>
      </ul>
    </div>
  );
}

export default NavBar;
