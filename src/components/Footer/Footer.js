import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

import styles from "./footer.module.css";
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
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
        </div>
        <p className={styles.footerText}>
          All rights reserved. © Copyright Venkat Kumar{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
