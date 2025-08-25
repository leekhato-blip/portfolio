import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarryBackground from "./StarryBackground";

const projects = [
  {
    title: "Kfarms App",
    description: "Livestock and fish farm management web & mobile app.",
    fullDescription:
      "A complete livestock and fish farm management app with responsive web and mobile views. Tracks feeds, production, fish hatching, and inventory in a simple elderly-friendly UI.",
    image: "/assets/img/coming_soon.png",
    codeUrl: "https://github.com/leekhato-blip/kfarms-backend",
    liveUrl: "https://kfarms.example.com",
    tech: ["React", "Java", "Spring Boot", "Tailwind CSS"],
    isLive: false,
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills.",
    fullDescription:
      "Portfolio site to display personal projects, skills, and testimonials. Built with React + Tailwind CSS and modern animations for smooth UX.",
    image: "/assets/img/portfolio-hero.png",
    codeUrl: "https://github.com/leekhato-blip/portfolio",
    liveUrl: "http://localhost:5173/",
    tech: ["React", "Tailwind CSS"],
    isLive: true,
  },
  {
    title: "ROOTS Website",
    description: "Operations optimization dashboard for startups.",
    fullDescription:
      "Dashboard for operations management, analytics, and performance optimization, built with Java, Spring Boot, MySQL, and Docker.",
    image: "/assets/img/coming_soon.png",
    codeUrl: "https://github.com/Rootsinc23/roots-website",
    liveUrl: "https://roots.example.com",
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
    isLive: false,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      id="projects"
      className="relative min-h-screen py-20 px-6 bg-[#0f172a] text-gray-200 overflow-hidden"
    >
      <StarryBackground starCount={120} />

      <section className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-4xl font-bold mb-12 text-purple-300">
          Projects
        </h2>

        <div className="font-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

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

                <div className="flex gap-4 justify-center">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 shadow-md transition"
                  >
                    View Code
                  </a>

                  <a
                    href={project.isLive ? project.liveUrl : "#"}
                    target="_blank"
                    className={`px-4 py-2 rounded-lg shadow-md transition ${
                      project.isLive
                        ? "bg-green-600 hover:bg-green-500"
                        : "bg-gray-600 cursor-not-allowed"
                    }`}
                  >
                    {project.isLive ? "Live Site" : "Coming Soon"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-[#1e1b4b]/90 rounded-2xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-purple-300 text-2xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-purple-300 mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {selectedProject.fullDescription}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {selectedProject.tech?.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 rounded-full text-xs font-semibold bg-purple-500/30 text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 justify-center">
                <a
                  href={selectedProject.codeUrl}
                  target="_blank"
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 shadow-md transition"
                >
                  View Code
                </a>

                {selectedProject.isLive && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 shadow-md transition"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
