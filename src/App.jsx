import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IntroLoader from "./components/IntroLoader";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minDuration = 1700;
    const startTime = performance.now();
    let timeoutId;

    const finishLoading = () => {
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);
      timeoutId = window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-loading", isLoading);

    return () => {
      document.body.classList.remove("is-loading");
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>{isLoading && <IntroLoader />}</AnimatePresence>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
