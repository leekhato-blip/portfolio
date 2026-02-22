import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Diamond, Sparkles } from "lucide-react";
import {
  cardSlideLeft,
  cardSlideRight,
  riseInSoft,
  sectionHeaderReveal,
  viewportHeader,
  viewportItem,
  viewportSection,
} from "../animations/scroll";
import StarryBackground from "./StarryBackground";

const milestones = [
  {
    year: "2018",
    title: "Started Coding",
    description: "Learned Java basics and began building small projects.",
  },
  {
    year: "2019",
    title: "First React App",
    description: "Shipped an early portfolio experience with React.",
  },
  {
    year: "2020",
    title: "Internship",
    description: "Gained hands-on software development team experience.",
  },
  {
    year: "2023",
    title: "ROOTS Startup",
    description:
      "Founded ROOTS (Reliable Operations & Optimization Tech Solutions).",
  },
];

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="section-shell relative bg-gradient-to-b from-[#3b0764] via-[#1e1b4b] to-[#0f172a] px-4 py-20 text-gray-200 sm:px-6 sm:py-24"
    >
      <StarryBackground starCount={92} />
      <div className="mesh-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Motion.div
          variants={sectionHeaderReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportHeader}
          className="mb-12 text-center"
        >
          <span className="section-kicker">About</span>
          <h2 className="mt-4 font-heading text-4xl text-purple-200 sm:text-5xl md:text-6xl">
            A little about my work
          </h2>
        </Motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <Motion.article
            variants={cardSlideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSection}
            className="section-glass relative rounded-3xl p-6 sm:p-8 md:p-10"
          >
            <Sparkles className="mb-5 text-purple-300" />
            <p className="font-body text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
              I am Khato Lee, a software developer focused on creating products
              that are clear, useful, and resilient. I enjoy turning difficult
              product requirements into stable systems with expressive UI and
              dependable backend foundations.
              {expanded && (
                <>
                  {" "}
                  My journey started with Java, expanded through React and system
                  design, and continues through real-world startup challenges. I
                  care deeply about growth, discipline, and meaningful impact.
                </>
              )}
            </p>

            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-6 rounded-full border border-purple-300/35 bg-purple-500/15 px-4 py-2 font-body text-sm font-semibold text-purple-200 transition hover:bg-purple-500/25"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Core Stack", value: "Java + React" },
                { label: "Focus", value: "Product + Reliability" },
                { label: "Approach", value: "Elegant + Practical" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-[#0f172a]/45 px-4 py-3"
                >
                  <p className="font-body text-xs uppercase tracking-[0.16em] text-gray-400">
                    {item.label}
                  </p>
                  <p className="mt-1 font-body text-sm font-semibold text-gray-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </Motion.article>

          <Motion.aside
            variants={cardSlideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSection}
            className="section-glass rounded-3xl p-6 sm:p-8 md:p-10"
          >
            <h3 className="font-heading text-3xl text-purple-200 sm:text-4xl">Journey</h3>
            <div className="relative mt-7 space-y-6">
              <div className="absolute left-[15px] top-1 h-[calc(100%-8px)] w-px bg-purple-400/35" />
              {milestones.map((milestone, index) => (
                <Motion.div
                  key={milestone.year}
                  variants={riseInSoft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportItem}
                  transition={{ delay: index * 0.08, duration: 0.65 }}
                  style={{ willChange: "transform, opacity" }}
                  className="relative pl-10"
                >
                  <Diamond
                    size={12}
                    className="absolute left-[10px] top-[9px] -translate-x-1/2 text-purple-300"
                  />
                  <p className="font-body text-xs uppercase tracking-[0.18em] text-purple-300">
                    {milestone.year}
                  </p>
                  <h4 className="mt-1 font-body text-lg font-semibold text-gray-100">
                    {milestone.title}
                  </h4>
                  <p className="mt-1 font-body text-sm text-gray-300">
                    {milestone.description}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.aside>
        </div>
      </div>
    </section>
  );
};

export default About;
