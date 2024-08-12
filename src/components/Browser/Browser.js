//Dependencies
import React from "react";

//Stylesheet
import styles from "./browser.module.css";

//Components
import ProjectsLayout from "../ProjectsLayout";
import BrowserTabGroup from "../BrowserTabGroup";
import BrowserTab from "../BrowserTab";
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
        <div className={styles.tabWrapper}>
          <BrowserTabGroup>
            <BrowserTab>Featured Projects</BrowserTab>
          </BrowserTabGroup>
        </div>
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
      <div className={styles.content}>
        <ProjectsLayout />
      </div>
    </div>
  );
}

export default Browser;
