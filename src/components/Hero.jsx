import { motion as Motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import StarryBackground from "./StarryBackground";

const heroTags = ["React", "Java", "Spring Boot", "SQL"];

const Hero = () => {
  return (
    <section
      id="hero"
      className="section-shell relative min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-gray-200"
    >
      <StarryBackground starCount={120} />
      <div className="mesh-overlay" aria-hidden="true" />
      <span className="soft-glow -left-20 top-20 hidden h-52 w-52 bg-purple-500/25 sm:block" />
      <span className="soft-glow right-0 top-40 hidden h-64 w-64 bg-blue-500/20 sm:block" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-7 px-4 pt-[6rem] pb-10 sm:gap-10 sm:px-6 sm:pt-24 sm:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <div className="text-center lg:text-left">
          <Motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-kicker mx-auto max-w-full justify-center px-3 py-1.5 text-[10px] tracking-[0.08em] sm:px-[0.9rem] sm:py-[0.42rem] sm:text-xs sm:tracking-[0.11em] lg:mx-0"
          >
            <Sparkles size={14} /> Open to collaborations
          </Motion.span>

          <Motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-4 max-w-[14ch] font-heading text-[clamp(2.1rem,10vw,3.2rem)] leading-[1.03] sm:mt-5 sm:text-[clamp(3rem,6vw,4.8rem)] lg:mx-0"
          >
            <span className="heading-gradient block">Elegant software.</span>
            <span className="block">Calm process.</span>
            <span className="block">Steady progress.</span>
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-5 hidden max-w-2xl font-body text-sm text-gray-300 sm:block sm:text-base md:text-lg lg:mx-0"
          >
            Building reliable products with care using React, Java, and Spring Boot.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26, duration: 0.6 }}
            className="mx-auto mt-5 grid w-full max-w-[260px] grid-cols-2 gap-2 sm:mt-8 sm:max-w-none sm:flex sm:flex-wrap sm:justify-center sm:gap-3 lg:mx-0 lg:justify-start"
          >
            {heroTags.map((item) => (
              <span
                key={item}
                className="rounded-full border border-purple-300/30 bg-[#1e1b4b]/50 px-3.5 py-1.5 text-center font-body text-[11px] text-purple-100 sm:px-4 sm:py-2 sm:text-sm"
              >
                {item}
              </span>
            ))}
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.6 }}
            className="mx-auto mt-6 grid w-full max-w-xs grid-cols-2 gap-2.5 sm:mt-8 sm:max-w-sm sm:gap-3 lg:mx-0"
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
          className="relative mx-auto w-full max-w-[286px] sm:max-w-md"
        >
          <div className="soft-ring -left-8 top-6 hidden h-32 w-32 sm:block" />
          <div className="soft-ring -right-5 bottom-10 hidden h-28 w-28 sm:block" />

          <div className="section-glass relative overflow-hidden rounded-[2rem] p-3">
            <img
              src="/assets/img/khato_lee.png"
              alt="Portrait of Khato Lee"
              className="h-[clamp(320px,60vw,460px)] w-full rounded-[1.5rem] object-cover object-top"
              loading="eager"
            />
          </div>

          <div className="absolute left-3 top-6 hidden section-glass rounded-2xl px-3 py-2 sm:-left-4 sm:top-8 sm:block sm:px-4 sm:py-3 lg:-left-6">
            <p className="font-heading text-xl text-purple-200 sm:text-2xl">5+</p>
            <p className="font-body text-[10px] uppercase tracking-[0.16em] text-gray-300 sm:text-xs">
              years learning
            </p>
          </div>

          <div className="absolute right-3 bottom-6 hidden section-glass rounded-2xl px-3 py-2 sm:-right-4 sm:bottom-8 sm:block sm:px-4 sm:py-3 lg:-right-6">
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
