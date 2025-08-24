import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const projects = [
  {
    title: "Kfarms App",
    description: "Livestock and fish farm management web & mobile app.",
    image: "/placeholder1.png",
    codeUrl: "#",
    tech: ["React", "Java", "Spring Boot", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills.",
    image: "/placeholder2.png",
    codeUrl: "#",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "ROOTS Dashboard",
    description: "Operations optimization dashboard for startups.",
    image: "/placeholder3.png",
    codeUrl: "#",
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative min-h-screen py-20 px-6 
                 bg-gradient-to-b from-[#3b0764] via-[#1e293b] to-[#0f172a]
                 text-gray-200 overflow-hidden"
    >
      {/* Starry background */}
      <StarryBackground starCount={120} />

      <section className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-purple-300">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(168,85,247,0.6)",
              }}
              className="bg-[#1e1b4b]/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tech?.map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 rounded-full text-xs font-semibold bg-purple-500/30 text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-center">
                  <a
                    href={project.codeUrl}
                    className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 shadow-md transition"
                  >
                    View Code
                  </a>
                  <button
                    disabled
                    className="px-4 py-2 rounded-lg bg-gray-600 cursor-not-allowed shadow-md"
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
