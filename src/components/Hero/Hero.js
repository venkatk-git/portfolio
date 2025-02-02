import React from "react";
import styles from "./hero.module.css";
import NoteTag from "../NoteTag";

function Hero() {
    const DAY = new Date().toDateString();
    return (
        <>
            <div className={styles.wrapper}>
                <img
                    className={styles.backgroundGradiant}
                    src="https://framerusercontent.com/images/Re80Iloo5Ovqo1UWXILdzCh1GXI.svg"
                />
                <NoteTag>Last commit on {DAY} </NoteTag>
                <main className={styles.headContent}>
                    <h1 className={styles.heading}>
                        Full Stack Developer Building Functional, User-Friendly
                        Web Projects
                        <span className={`${styles.italic} ${styles.name}`}>
                            {" "}
                            - Venkat
                        </span>
                    </h1>

                    <p className={styles.description}>
                        Crafting Seamless Digital Experiences with Code &
                        Creativity
                    </p>
                    {/* 
          <MovingBorder>
            <button className={styles.contactBtn}>
              <a href="#contact">Contact</a>
            </button>
          </MovingBorder> */}
                </main>
                <div className={styles.gradientMerger} />
            </div>
        </>
    );
}

export default Hero;
