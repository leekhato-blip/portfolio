import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip"; // optional, or simple custom tooltip

const skills = [
  { name: "Java", level: "Experienced", x: "20%", y: "30%" },
  { name: "React", level: "Learning Now", x: "60%", y: "25%" },
  { name: "Spring Boot", level: "Intermediate", x: "40%", y: "60%" },
  { name: "Tailwind CSS", level: "Intermediate", x: "75%", y: "55%" },
  { name: "REST APIs", level: "Experienced", x: "30%", y: "80%" },
];

const connections = [
  [0, 2], // Java → Spring Boot
  [1, 3], // React → Tailwind
  [2, 4], // Spring Boot → REST APIs
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="relative min-h-screen py-20 px-6 
                 bg-gradient-to-b from-[#3b0764] via-[#1e1b4b] to-[#0f172a] 
                 text-gray-200"
    >
      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-purple-300">Skills</h2>

        <div className="relative w-full h-[600px] lg:h-[700px] mx-auto">
          {/* Connections */}
          <svg className="absolute w-full h-full">
            {connections.map(([from, to], i) => (
              <line
                key={i}
                x1={skills[from].x}
                y1={skills[from].y}
                x2={skills[to].x}
                y2={skills[to].y}
                stroke="rgba(168,85,247,0.5)"
                strokeWidth="2"
              />
            ))}
          </svg>

          {/* Skill Stars */}
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-400 text-gray-100 
                         flex items-center justify-center cursor-pointer shadow-md"
              style={{
                width: "60px",
                height: "60px",
                left: skill.x,
                top: skill.y,
                transform: "translate(-50%, -50%)",
              }}
              whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              title={`${skill.name} – ${skill.level}`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
