import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <Hero />
      <main className={styles.mainWrapper}>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
