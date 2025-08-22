import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const milestones = [
  { year: "2018", title: "Started Coding", description: "Learned Java basics and small projects." },
  { year: "2019", title: "First React App", description: "Built a personal portfolio with React." },
  { year: "2020", title: "Internship", description: "Software development internship experience." },
  { year: "2023", title: "ROOTS Startup", description: "Founded ROOTS (Reliable Operations & Optimization Tech Solutions)." },
];

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-screen py-10 px-6 text-gray-200 flex justify-center items-center
                 bg-gradient-to-b from-[#3b0764] via-[#1e1b4b] to-[#0f172a]"
    >
      <StarryBackground starCount={100} />
      <section className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

        {/* 👤 Left Column: Personal Story */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl font-bold mb-6 text-purple-300">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m Khato Lee, a passionate software developer focused on building meaningful applications. 
            My journey started with Java and React, and over the years I’ve explored various domains in tech, 
            learning, growing, and creating. I’m deeply committed to continual growth, innovation, and sharing my journey with others, InshaAllah.
          </p>
        </motion.div>

        {/* 🌌 Right Column: Constellation Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex flex-col gap-12 relative"
        >
          <h2 className="text-4xl font-bold mb-6 text-purple-300 hidden lg:block">My Journey</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 w-1 h-full bg-purple-600/40"></div>

            {/* Milestones */}
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative mb-12 flex items-start cursor-pointer"
                title={m.description}
              >
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-purple-400 z-10"></div>

                {/* Text */}
                <div className="ml-6">
                  <p className="text-purple-300 font-semibold">{m.year}</p>
                  <h3 className="text-gray-200 font-medium">{m.title}</h3>
                  <p className="text-gray-400 hidden md:block">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
        
      </section>
      
    </div>
  );
};

export default About;
