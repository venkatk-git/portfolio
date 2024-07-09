import React from "react";

import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.wrapper} id="contact">
      <div className={styles.contactHeadWrapper}>
        <h1 className={styles.sectionTitle}>Let&#39;s Chat</h1>
        <h3>Get in touch by sending a message!</h3>
      </div>
      <div className={styles.contactStack}>
        <div className={styles.contactForm}></div>
        <div className={styles.handles}></div>
        <div className={styles.dummy}></div>
      </div>
    </div>
  );
}

export default Contact;
