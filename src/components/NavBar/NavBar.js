"use client";
import React from "react";

import { IoMdClose } from "react-icons/io";

import styles from "./navBar.module.css";

const MobileNavList = ({ mobileNavState }) => {
  return (
    mobileNavState && (
      <ul className={styles.mobileNavList}>
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
    )
  );
};

const DesktopNavList = () => {
  return (
    <ul className={styles.desktopNavList}>
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
  );
};

function NavBar() {
  const [mobileNavState, setMobileNavState] = React.useState(false);

  const NAV_SYMBOL = mobileNavState ? "X" : "V";

  const handleMobileNavToggle = () => {
    setMobileNavState(!mobileNavState);
  };

  return (
    <div
      className={`${styles.wrapper} ${
        mobileNavState ? styles.mobileNavOpen : styles.mobileNavClose
      }`}
    >
      <div className={styles.blur} />
      <div className={styles.mobileNav}>
        <button className={styles.navTrigger} onClick={handleMobileNavToggle}>
          {NAV_SYMBOL}
        </button>
        <MobileNavList mobileNavState={mobileNavState} />
      </div>
      <DesktopNavList />
    </div>
  );
}

export default NavBar;
