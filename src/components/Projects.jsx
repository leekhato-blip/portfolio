import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import StarryBackground from "./StarryBackground";

const projects = [
  {
    title: "Kfarms App",
    description: "Livestock and fish farm management web & mobile app.",
    fullDescription:
      "A complete livestock and fish farm management app with responsive web and mobile views. Tracks feeds, production, fish hatching, and inventory in a simple elderly-friendly UI.",
    image: "/assets/img/kfarmapp.png",
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
    liveUrl: "https://khato.vercel.app",
    tech: ["React", "Tailwind CSS"],
    isLive: true,
  },
  {
    title: "ROOTS Website",
    description: "Operations optimization dashboard for startups.",
    fullDescription:
      "Dashboard for operations management, analytics, and performance optimization, built with Java, Spring Boot, MySQL, and Docker.",
    image: "/assets/img/roots.png",
    codeUrl: "https://github.com/Rootsinc23/roots-website",
    liveUrl: "https://rootswrld.vercel.app/",
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
    isLive: true,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previous = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="section-shell relative bg-gradient-to-b from-[#3b0764] via-[#1e293b] to-[#0f172a] px-4 py-20 text-gray-200 sm:px-6 sm:py-24"
    >
      <StarryBackground starCount={120} />
      <div className="mesh-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="mb-12 text-center"
        >
          <span className="section-kicker">Projects</span>
          <h2 className="mt-4 font-heading text-4xl text-purple-200 sm:text-5xl md:text-6xl">
            Distinct builds, practical outcomes
          </h2>
        </Motion.div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group section-glass overflow-hidden rounded-3xl"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="w-full text-left"
                aria-label={`Open details for ${project.title}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/75 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading text-2xl text-purple-100 sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <div className="p-5">
                  <p className="font-body text-gray-300">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={`${project.title}-${tech}`}
                        className="rounded-full border border-purple-300/25 bg-purple-500/12 px-3 py-1 text-xs font-semibold text-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="inline-flex items-center gap-1 rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-500"
                    >
                      Code <ArrowUpRight size={14} />
                    </a>

                    {project.isLive ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="rounded-lg border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:bg-blue-400/20"
                      >
                        Live
                      </a>
                    ) : (
                      <span className="rounded-lg bg-slate-700/70 px-4 py-2 text-sm text-slate-300">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </Motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6"
            onClick={() => setSelectedProject(null)}
            role="presentation"
          >
            <Motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="section-glass relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl p-4 sm:rounded-3xl sm:p-6"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} details`}
            >
              <button
                className="absolute right-4 top-4 text-2xl font-bold text-gray-300 transition hover:text-purple-300"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                &times;
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                loading="lazy"
                className="h-44 w-full rounded-2xl object-cover sm:h-56 md:h-64"
              />

              <h3 className="mt-5 font-heading text-3xl text-purple-200 sm:text-4xl">
                {selectedProject.title}
              </h3>
              <p className="mt-3 font-body text-gray-300">
                {selectedProject.fullDescription}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={`${selectedProject.title}-modal-${tech}`}
                    className="rounded-full border border-purple-300/25 bg-purple-500/12 px-3 py-1 text-xs font-semibold text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={selectedProject.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-500"
                >
                  View Code
                </a>

                {selectedProject.isLive && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:bg-blue-400/20"
                  >
                    Live Site
                  </a>
                )}
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
