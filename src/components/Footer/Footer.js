import React from "react";

//Stylesheet
import styles from "./footer.module.css";

//Components
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

//Helpers & Constants
import { LINKS } from "@/constants";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.footerWrapper}>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <h1>venkat</h1>
        <div className={styles.handles}>
          <a href={LINKS.github}>
            <FaGithub />
          </a>
          <a href={LINKS.instagram}>
            <FaInstagram />
          </a>
          <a href={LINKS.x}>
            <FaXTwitter />
          </a>
        </div>
        <p className={styles.footerText}>
          All rights reserved. © Copyright Venkat Kumar
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
