import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import StarryBackground from "./StarryBackground";

const testimonials = [
  {
    quote: "Khato delivered with heart and precision. Clean architecture, clear communication.",
    name: "Aisha M.",
    role: "Product Manager",
  },
  {
    quote: "His Java + React skills are solid. Loved the attention to UX details.",
    name: "Ibrahim D.",
    role: "Tech Lead",
  },
  {
    quote: "Reliable, humble, and fast. InshaAllah, we’ll collaborate again soon.",
    name: "Zainab O.",
    role: "Founder",
  },
  {
    quote: "Always professional and a pleasure to work with. Highly recommended.",
    name: "Ahmed S.",
    role: "CTO",
  },
  {
    quote: "Creative, skilled, and dependable. Truly exceptional work.",
    name: "Fatima K.",
    role: "Designer",
  },
];

const Card = ({ q, n, r }) => (
  <div className="w-72 max-w-[19rem] bg-white/5 backdrop-blur-md rounded-2xl border border-purple-300/20 
               p-6 shadow-[0_0_25px_rgba(168,85,247,0.15)] flex-shrink-0">
    <div className="text-5xl leading-none text-purple-300 mb-3">“</div>
    <p className="text-gray-200">{q}</p>
    <div className="mt-6 pt-4 border-t border-white/10">
      <p className="font-semibold text-purple-200">{n}</p>
      <p className="text-sm text-gray-400">{r}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const positions = [
    { top: "10%", left: "10vw" },
    { top: "25%", left: "45vw" },
    { top: "40%", left: "75vw" },
    { top: "60%", left: "25vw" },
    { top: "50%", left: "60vw" },
  ];

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-slide for mobile only
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section
      id="testimonials"
      className="relative min-h-[60vh] py-24 px-6 
                 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-gray-200 overflow-hidden"
    >
      <StarryBackground starCount={60} />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-heading text-center text-4xl font-bold text-purple-300 mb-16"
      >
        What People Say
      </motion.h2>

      {isMobile ? (
        // Mobile carousel
        <div className="flex font-body justify-center items-center relative w-full overflow-hidden pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Card
                q={testimonials[current].quote}
                n={testimonials[current].name}
                r={testimonials[current].role}
              />
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8 absolute bottom-0 left-1/2 -translate-x-1/2">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === current ? "bg-purple-300" : "bg-purple-600/40"}`}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop constellation layout
        <div className="font-body relative w-full h-[540px]">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: positions[i].top,
                left: positions[i].left,
                translate: "-50% 0",
              }}
              animate={{
                x: [
                  0,
                  (Math.random() - 0.5) * 50,
                  (Math.random() - 0.5) * 50,
                  0,
                ],
                y: [
                  0,
                  (Math.random() - 0.5) * 40,
                  (Math.random() - 0.5) * 40,
                  0,
                ],
                rotate: [
                  0,
                  (Math.random() - 0.5) * 5,
                  (Math.random() - 0.5) * 5,
                  0,
                ],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <Card q={t.quote} n={t.name} r={t.role} />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
