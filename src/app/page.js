import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundGrid from "@/components/BackgroundGrid";

import styles from "./page.module.css";
import { GRID_SIZE } from "@/constants";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pageWrapper}>
        <div className={styles.backgroundGrid}>
          <BackgroundGrid size={GRID_SIZE} />
        </div>
        <NavBar />
        <Hero />
        <main className={styles.mainWrapper}>
          <Projects />
          <About />
          <Contact />
        </main>
        <div className={styles.gradientMerger} />
        <Footer className={styles.footerWrapper} />
      </div>
    </div>
  );
}
