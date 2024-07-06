import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";

import styles from "./page.module.css";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className={styles.webWrapper}>
      <NavBar />
      <Hero />
      <Projects />
      <About />
    </div>
  );
}
