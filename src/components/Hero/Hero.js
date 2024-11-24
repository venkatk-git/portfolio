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
                        There is a strong belief in the power of creativity and
                        collaboration,
                        <span className={`${styles.italic} ${styles.name}`}>
                            {" "}
                            Venkat
                        </span>
                    </h1>

                    <p className={styles.description}>
                        I turn ideas into innovative,
                        <br />
                        high-performance <i>software solutions.</i>
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
