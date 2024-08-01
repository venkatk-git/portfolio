"use client";
import React from "react";

// Styles
import styles from "./contact.module.css";

// Components
import MovingBorder from "../MovingBorder";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

// Helpers & Utils
import { SHEET_ENDPOINT } from "@/utils";
import { POST } from "@/helpers/axiosPost";

function ContactTemp() {
  return (
    <div className={styles.wrapper} id="contact">
      <div className={styles.contactHeadWrapper}>
        <h1 className={styles.sectionTitle}>Get In Touch</h1>
      </div>
      <div className={styles.contactStack}>
        <div className={styles.handlesWrapper}>
          <ul className={styles.contactList}>
            <li className={styles.liImg}>
              <MdEmail />
            </li>
            <li className={styles.liName}>Email</li>
            <li className={styles.liLink}>venkatkumar.profiles@gmail.com</li>
          </ul>
          <ul className={styles.contactList}>
            <li className={styles.liImg}>
              <FaHome />
            </li>
            <li className={styles.liName}>Location</li>
            <li className={styles.liLink}>Coimbatore</li>
          </ul>
          <ul className={styles.contactList}>
            <li className={styles.liImg}>
              <MdCall />
            </li>
            <li className={styles.liName}>Phone number</li>
            <li className={styles.liLink}>+9123564598</li>
          </ul>
          <ul className={styles.contactList}>
            <li className={styles.liImg}>
              <FaGithub />
            </li>
            <li className={styles.liName}>Github</li>
            <li className={styles.liLink}>https://github.com/venkatk-git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [duringSubmit, setDuringSubmit] = React.useState(false);

  const [formData, setFormData] = React.useState({
    Who: "",
    Name: "",
    Email: "",
    Phone: "",
    Reason: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      Who: formData.Who,
      Name: formData.Name,
      Email: formData.Email,
      Phone: formData.Phone,
      Reason: formData.Reason,
    };

    setDuringSubmit(!duringSubmit);
    const res = await POST(SHEET_ENDPOINT, newData);

    if (res.status) {
      console.log("Successfully Submitted");
      setDuringSubmit(false);
    }

    setFormData({
      Who: "",
      Name: "",
      Email: "",
      Phone: "",
      Reason: "",
    });
  };

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
        <div className={styles.handles}>Handles</div>
        <div className={styles.contactForm}>
          {duringSubmit && <div className={styles.loading}>Submitting...</div>}
          <form className={styles.formWrapper} onSubmit={onSubmit}>
            <h3 className={styles.formHeading}>Reach out.</h3>
            <div className={styles.formFieldWrapper}>
              <div className={styles.whoWrapper}>
                <h3>Who are you?</h3>
                <fieldset group="who" className={styles.whoBtnWrapper}>
                  <div className={styles.whoBtn}>
                    <input
                      type="radio"
                      id="company"
                      name="who"
                      value="company"
                      checked={formData.Who === "company"}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          Who: e.target.value,
                        }))
                      }
                    />
                    <label htmlFor="company">Company</label>
                  </div>
                  <div className={styles.whoBtn}>
                    <input
                      type="radio"
                      id="organization"
                      name="who"
                      value="organization"
                      checked={formData.Who === "organization"}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          Who: e.target.value,
                        }))
                      }
                    />
                    <label htmlFor="organization">Organization</label>
                  </div>
                  <div className={styles.whoBtn}>
                    <input
                      type="radio"
                      id="individual"
                      name="who"
                      value="individual"
                      checked={formData.Who === "individual"}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          Who: e.target.value,
                        }))
                      }
                    />
                    <label htmlFor="individual">Individual</label>
                  </div>
                </fieldset>
                <div className={styles.whoFieldWrapper}>
                  <div className={styles.whoField}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.Name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          Name: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className={styles.whoField}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.Email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          Email: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className={styles.whoField}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.Phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          Phone: e.target.value,
                        }))
                      }
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
                    value={formData.Reason}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        Reason: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
              <div className={styles.submitWrapper}>
                <MovingBorder>
                  <button className={styles.submitBtn}>Submit</button>
                </MovingBorder>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
