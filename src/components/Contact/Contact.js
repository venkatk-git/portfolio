import React from "react";

import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.wrapper} id="contact">
      <div className={styles.contactHeadWrapper}>
        <h1 className={styles.sectionTitle}>Got ideas? Let&#39;s team up.</h1>
        <h3>
          Feel free to reach out to discuss potential projects, collaborations,
          or any questions you may have.{" "}
        </h3>
      </div>
      <div className={styles.contactStack}>
        <div className={styles.handles}></div>
        <div className={styles.contactForm}>
          <form className={styles.formWrapper}>
            <h3 className={styles.formHeading}>Reach out.</h3>
            <div className={styles.formFieldWrapper}>
              <div className={styles.whoWrapper}>
                <h3>Who are you?</h3>
                <div className={styles.whoBtnWrapper}>
                  <div className={styles.whoBtn}>
                    <input type="radio" id="company" name="company" />
                    <label for="company">Company</label>
                  </div>
                  <div className={styles.whoBtn}>
                    <input type="radio" id="organization" name="organization" />
                    <label for="organization">Organization</label>
                  </div>
                  <div className={styles.whoBtn}>
                    <input type="radio" id="individual" name="individual" />
                    <label for="individual">Individual</label>
                  </div>
                </div>
                <div className={styles.whoFieldWrapper}>
                  <div className={styles.whoField}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div className={styles.whoField}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className={styles.whoField}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.whyWrapper}>
                <h3>Why are you reaching out?</h3>
                <div className={styles.whyFieldWrapper}>
                  <input
                    type="text"
                    id="why"
                    name="why"
                    placeholder="What&#39;s your reason?"
                  />
                </div>
              </div>
              <div className={styles.submitWrapper}>
                <button className={styles.submitBtn}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
