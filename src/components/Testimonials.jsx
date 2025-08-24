import { motion } from "framer-motion";
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
               p-6 shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
               transition">
    <div className="text-5xl leading-none text-purple-300 mb-3">“</div>
    <p className="text-gray-200">{q}</p>
    <div className="mt-6 pt-4 border-t border-white/10">
      <p className="font-semibold text-purple-200">{n}</p>
      <p className="text-sm text-gray-400">{r}</p>
    </div>
  </div>
);

const Testimonials = () => {
  // starting positions for 5 cards (top and left in viewport units)
  const positions = [
    { top: "10%", left: "10vw" },
    { top: "25%", left: "45vw" },
    { top: "40%", left: "75vw" },
    { top: "60%", left: "25vw" },
    { top: "50%", left: "60vw" },
  ];

  return (
    <section
      id="testimonials"
      className="relative min-h-[80vh] py-24 px-6 
                 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-gray-200 overflow-hidden"
    >
      <StarryBackground starCount={60} />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-purple-300 mb-16"
      >
        What People Say
      </motion.h2>

      <div className="relative w-full h-[540px]">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: positions[i].top,
              left: positions[i].left,
              translate: "-50% 0", // center horizontally
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
    </section>
  );
};

export default Testimonials;
