import { motion as Motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  riseInSoft,
  sectionHeaderReveal,
  viewportHeader,
  viewportSection,
} from "../animations/scroll";
import StarryBackground from "./StarryBackground";

const testimonials = [
  {
    quote:
      "Khato delivered with heart and precision. Clean architecture, clear communication.",
    name: "Aisha Musa",
    role: "Product Manager",
  },
  {
    quote:
      "Reliable, humble, and fast. InshaAllah, we'll collaborate again soon.",
    name: "Zainab T.",
    role: "Founder",
  },
  {
    quote: "Creative, skilled, and dependable. Truly exceptional work.",
    name: "Fatima Kareem",
    role: "Designer",
  },
  {
    quote: "He brings both creativity and discipline to every project.",
    name: "Ngozi Eze",
    role: "UX Researcher",
  },
  {
    quote: "Khato has a rare blend of technical skill and human warmth.",
    name: "Tolu Adebayo",
    role: "Software Engineer",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="section-shell relative bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] px-4 py-20 text-gray-200 sm:px-6 sm:py-24"
    >
      <StarryBackground starCount={64} />
      <div className="mesh-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Motion.div
          variants={sectionHeaderReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportHeader}
          className="mb-12 text-center"
        >
          <span className="section-kicker">Testimonials</span>
          <h2 className="mt-4 font-heading text-4xl text-purple-200 sm:text-5xl md:text-6xl">
            Feedback from past collaborators
          </h2>
        </Motion.div>

        <Motion.div
          variants={riseInSoft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSection}
          className="relative mx-auto max-w-4xl"
        >
          <div className="soft-ring -left-10 top-16 hidden h-24 w-24 md:block" />
          <div className="soft-ring -right-10 bottom-16 hidden h-24 w-24 md:block" />

          <div className="section-glass min-h-[260px] rounded-3xl px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
            <AnimatePresence mode="wait">
              <Motion.article
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                className="text-center"
              >
                <p className="font-heading text-5xl leading-none text-purple-300">“</p>
                <p className="mx-auto mt-4 max-w-3xl font-body text-base leading-relaxed text-gray-200 sm:text-lg md:text-2xl">
                  {testimonials[current].quote}
                </p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-body text-lg font-semibold text-purple-200">
                    {testimonials[current].name}
                  </p>
                  <p className="font-body text-sm uppercase tracking-[0.16em] text-gray-400">
                    {testimonials[current].role}
                  </p>
                </div>
              </Motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-7 flex justify-center gap-2.5">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  current === index
                    ? "w-9 bg-purple-300"
                    : "w-2.5 bg-purple-500/35 hover:bg-purple-400/60"
                }`}
              />
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
