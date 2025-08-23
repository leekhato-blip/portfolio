import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const testimonials = [
  {
    quote:
      "Khato delivered with heart and precision. Clean architecture, clear communication.",
    name: "Aisha M.",
    role: "Product Manager",
  },
  {
    quote:
      "His Java + React skills are solid. Loved the attention to UX details.",
    name: "Ibrahim D.",
    role: "Tech Lead",
  },
  {
    quote:
      "Reliable, humble, and fast. InshaAllah, we’ll collaborate again soon.",
    name: "Zainab O.",
    role: "Founder",
  },
];

const Card = ({ q, n, r, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay }}
    className="w-72 max-w-[19rem] bg-white/5 backdrop-blur-md rounded-2xl border border-purple-300/20 
               p-6 shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
               transition"
  >
    <div className="text-5xl leading-none text-purple-300 mb-3">“</div>
    <p className="text-gray-200">{q}</p>
    <div className="mt-6 pt-4 border-t border-white/10">
      <p className="font-semibold text-purple-200">{n}</p>
      <p className="text-sm text-gray-400">{r}</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative min-h-[80vh] py-24 px-6 
                 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-gray-200 overflow-hidden"
    >
      {/* subtle stars */}
      <StarryBackground starCount={60} />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-purple-300 mb-16"
      >
        What People Say
      </motion.h2>

      {/* Orbit stage */}
      <div className="relative mx-auto max-w-5xl h-[540px]">
        {/* central invisible anchor */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0" />

        {/* three orbits (different radii / speeds) */}
        <div className="orbit orbit-one">
          <Card q={testimonials[0].quote} n={testimonials[0].name} r={testimonials[0].role} delay={0.1} />
        </div>
        <div className="orbit orbit-two">
          <Card q={testimonials[1].quote} n={testimonials[1].name} r={testimonials[1].role} delay={0.2} />
        </div>
        <div className="orbit orbit-three">
          <Card q={testimonials[2].quote} n={testimonials[2].name} r={testimonials[2].role} delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
