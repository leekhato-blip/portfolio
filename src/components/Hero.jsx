import { easeInOut, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import StarryBackground from "./StarryBackground";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen overflow-hidden 
                 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] 
                 text-gray-200"
    >
      {/* ✨ Starry night background */}
      <StarryBackground starCount={120} />

      {/* 🌌 Hero Content */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        
        {/* 💎 Greeting */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-purple-300 mb-3"
        >
          Salam! ✨ I’m
        </motion.p>

        {/* 🌟 Central Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold font-display
                     bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 
                     bg-clip-text text-transparent 
                     drop-shadow-[0_0_25px_rgba(168,85,247,0.7)]"
        >
          Khato Lee
        </motion.h1>

        {/* ✨ Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 text-2xl text-gray-300"
        >
          Software Developer
        </motion.h2>

        {/* 🌠 Animated Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: easeInOut }}
          className="mt-6 flex flex-wrap justify-center gap-3.5"
        >
          {["Java", "React", "Growth", "Innovation"].map((skill, i) => (
            <motion.span
              key={i}
              animate={{
                textShadow: [
                  "0 0 2px #c4b5fd",
                  "0 0 10px #a855f7",
                  "0 0 2px #c4b5fd"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full border border-purple-400/30 
                         bg-[#1e1b4b]/40 backdrop-blur-sm 
                         text-purple-200 shadow-md"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* 💫 CTA Button */}
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1, boxShadow: "0 0 35px rgba(168,85,247,0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 rounded-lg 
                     bg-purple-600 hover:bg-purple-500 
                     shadow-lg glow-button 
                     transition font-medium"
        >
          Explore My World
        </motion.a>
      </section>

      {/* ⭐ Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 w-full flex justify-center"
      >
        <ChevronDown size={40} className="text-purple-400 drop-shadow-lg" />
      </motion.div>
    </div>
  );
};

export default Hero;
