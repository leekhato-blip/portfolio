import { motion as Motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import StarryBackground from "./StarryBackground";

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-shell relative min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-gray-200"
    >
      <StarryBackground starCount={120} />
      <div className="mesh-overlay" aria-hidden="true" />
      <span className="soft-glow -left-20 top-20 h-52 w-52 bg-purple-500/25" />
      <span className="soft-glow right-0 top-40 h-64 w-64 bg-blue-500/20" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-4 pt-24 pb-14 sm:px-6 sm:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div>
          <Motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-kicker"
          >
            <Sparkles size={14} /> Open to thoughtful collaborations
          </Motion.span>

          <Motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="mt-6 font-heading text-4xl leading-[0.98] sm:text-6xl md:text-7xl"
          >
            <span className="heading-gradient">Elegant software.</span>
            <br />
            Calm process.
            <br />
            Steady progress.
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-7 max-w-2xl font-body text-sm text-gray-300 sm:text-base md:text-lg"
          >
            Building reliable products with React, Java, and Spring Boot.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {["React", "Java", "Spring Boot", "SQL", "Docker"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-purple-300/30 bg-[#1e1b4b]/45 px-4 py-2 font-body text-xs text-purple-200 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.6 }}
            className="mt-10 grid grid-cols-2 gap-3"
          >
            <a
              href="#projects"
              className="glow-button min-w-0 rounded-xl bg-purple-600 px-4 py-3 text-center font-body text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-purple-500 sm:text-sm sm:tracking-wide"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="min-w-0 rounded-xl border border-blue-300/35 bg-blue-400/10 px-4 py-3 text-center font-body text-xs font-semibold uppercase tracking-[0.08em] text-blue-200 transition hover:bg-blue-400/20 sm:text-sm sm:tracking-wide"
            >
              Say Hello
            </a>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.8 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md"
        >
          <div className="soft-ring -left-8 top-6 h-32 w-32" />
          <div className="soft-ring -right-5 bottom-10 h-28 w-28" />

          <div className="section-glass relative overflow-hidden rounded-[2rem] p-3">
            <img
              src="/assets/img/khato_lee.png"
              alt="Portrait of Khato Lee"
              className="h-[clamp(320px,60vw,460px)] w-full rounded-[1.5rem] object-cover object-top"
              loading="eager"
            />
          </div>

          <div className="absolute left-3 top-6 section-glass rounded-2xl px-3 py-2 sm:-left-4 sm:top-8 sm:px-4 sm:py-3 lg:-left-6">
            <p className="font-heading text-xl text-purple-200 sm:text-2xl">5+</p>
            <p className="font-body text-[10px] uppercase tracking-[0.16em] text-gray-300 sm:text-xs">
              years learning
            </p>
          </div>

          <div className="absolute right-3 bottom-6 section-glass rounded-2xl px-3 py-2 sm:-right-4 sm:bottom-8 sm:px-4 sm:py-3 lg:-right-6">
            <p className="font-heading text-xl text-blue-200 sm:text-2xl">3</p>
            <p className="font-body text-[10px] uppercase tracking-[0.16em] text-gray-300 sm:text-xs">
              projects shared
            </p>
          </div>
        </Motion.div>
      </div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, delay: 1 }}
        className="absolute bottom-6 hidden w-full justify-center sm:flex"
      >
        <ArrowDown className="text-purple-300" size={28} />
      </Motion.div>
    </section>
  );
};

export default Hero;
