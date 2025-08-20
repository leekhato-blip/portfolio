import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import StarryBackground from "./StarryBackground";

const Hero = () => {
  return (
    <div id="hero" className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-gray-200">
      <StarryBackground starCount={100} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex justify-center w-full text-4xl drop-shadow-lg"
      >
        <a
          href="#about"
          className="text-purple-400 hover:text-purple-300 transition"
        >
          <ChevronDown size={40} strokeWidth={2.5} />
        </a>
      </motion.div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold font-display bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
        >
          Abdulsalam Kato
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="font-sans mt-2 text-xl text-gray-300"
        >
          Software Developer
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="font-sans mt-4 max-w-2xl"
        >
          I build clean, functional, and meaningful applications with
          <span className="text-purple-300 font-semibold"> Java</span> &
          <span className="text-purple-300 font-semibold"> React</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-6 flex gap-4"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(168,85,247,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-purple-600 rounded-lg shadow-lg hover:shadow-purple-400/50 hover:bg-purple-500 transition"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(168,85,247,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-purple-400 rounded-lg hover:bg-purple-700/20 hover:shadow-md hover:shadow-purple-400/40 transition"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
