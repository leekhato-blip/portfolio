import React from "react";
import { easeOut, motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const About = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-[#3b0764] via-[#1e1b4b] to-[#0f172a] text-gray-200">
    <StarryBackground starCount={80} />
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center text-gray-200"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: easeOut }}
        className="max-w-2xl text-lg text-gray-300 leading-relaxed"
      >
        I am a{" "}
        <span className="text-purple-300 font-medium">software developer </span>
        who builds clean, functional, and meaningful applications. My goal is to
        transform <span className="text-blue-300 font-medium">ideas </span>
        into digital experiences that are simple, elegant, and impactful.
      </motion.p>
    </section>
    </div>
  );
};

export default About;
