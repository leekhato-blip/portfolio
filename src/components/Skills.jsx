import { motion } from "framer-motion";
import {
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiDocker,
  SiJavascript,
  SiGit,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import StarryBackground from "./StarryBackground";

// ✅ Skills with coords + levels
const skills = [
  {
    name: "Java",
    level: "Experienced",
    percentage: 90,
    icon: FaJava,
    x: "58%",
    y: "18%",
  },
  {
    name: "React",
    level: "Intermediate",
    percentage: 65,
    icon: SiReact,
    x: "25%",
    y: "28%",
  },
  {
    name: "Spring Boot",
    level: "Intermediate",
    percentage: 70,
    icon: SiSpringboot,
    x: "68%",
    y: "62%",
  },
  {
    name: "Tailwind CSS",
    level: "Intermediate",
    percentage: 75,
    icon: SiTailwindcss,
    x: "70%",
    y: "50%",
  },
  {
    name: "SQL",
    level: "Experienced",
    percentage: 85,
    icon: SiMysql,
    x: "82%",
    y: "35%",
  },
  {
    name: "Docker",
    level: "Learning Now",
    percentage: 40,
    icon: SiDocker,
    x: "45%",
    y: "70%",
  },
  {
    name: "JavaScript",
    level: "Experienced",
    percentage: 80,
    icon: SiJavascript,
    x: "35%",
    y: "15%",
  },
  {
    name: "Git",
    level: "Experienced",
    percentage: 85,
    icon: SiGit,
    x: "60%",
    y: "80%",
  },
  {
    name: "Linux",
    level: "Intermediate",
    percentage: 70,
    icon: SiLinux,
    x: "20%",
    y: "65%",
  },
];

const Skills = () => {
  return (
    
    <div
      id="skills"
      className="relative min-h-screen py-20 px-7 
                bg-gradient-to-b from-[#3b0764] via-[#1e1b4b] to-[#0f172a]

 
                 text-gray-200 overflow-hidden"
    >
      <StarryBackground starCount={50} />
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-16 text-purple-300 text-center"
      >
        Skills
      </motion.h2>

      {/* 📱 Mobile: Grid view with progress bars */}
      <div className="block lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-2 bg-[#1e1b4b]/80 p-4 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3">
                <Icon className="text-purple-300" size={28} />
                <div>
                  <p className="text-lg font-semibold text-gray-200">
                    {skill.name}
                  </p>
                  <p className="text-sm text-purple-300">
                    {skill.level} — {skill.percentage}%
                  </p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="w-full bg-gray-700/40 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: i * 0.15 }}
                  className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 💻 Desktop version */}
      <div className="hidden lg:block relative w-full h-[850px]">
        {/* Lines connecting skills */}
        <svg className="absolute w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(168,85,247,0.15)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.15)" />
            </linearGradient>
          </defs>
          {skills.map((from, i) =>
            skills
              .slice(i + 1)
              .map((to, j) => (
                <line
                  key={`${i}-${j}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="url(#lineGradient)"
                  strokeWidth="0.7"
                  className="transition-colors duration-300 group-hover:stroke-purple-400/30"
                />
              ))
          )}
        </svg>

        {/* Skill nodes */}
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="absolute flex items-center gap-3 group"
              style={{
                top: skill.y,
                left: skill.x,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* 🌌 Saturn Ring with Gradient Progress */}
              <div className="relative flex items-center justify-center">
                <svg className="w-14 h-14 -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r="20"
                    stroke="url(#grad)"
                    strokeWidth="4"
                    fill="transparent"
                    className="opacity-30"
                  />
                  <circle
                    cx="28"
                    cy="28"
                    r="20"
                    stroke="url(#grad)"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 20}
                    strokeDashoffset={
                      (1 - skill.percentage / 100) * 2 * Math.PI * 20
                    }
                    className="transition-all duration-700"
                  />
                  {/* Gradient Definition */}
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Pulsing Dot */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.9)] 
                     absolute flex items-center justify-center"
                >
                  {/* % number (visible on hover) */}
                  <span
                    className="absolute text-sm font-bold text-white 
                           drop-shadow-[0_0_6px_rgba(0,0,0,0.8)]
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {skill.percentage}%
                  </span>
                </motion.div>
              </div>

              {/* Logo + Name */}
              <div className="flex items-center gap-2 bg-[#1e1b4b]/80 px-3 py-2 rounded-xl shadow-md">
                <Icon className="text-purple-300" size={26} />
                <span className="text-base font-medium text-gray-200">
                  {skill.name}
                </span>
                <span className="ml-2 text-purple-300 text-sm">
                  — {skill.level}
                </span>
              </div>
            </motion.div>
          );
        })}
        
      </div>
      
    </div>
    
  );
};

export default Skills;
