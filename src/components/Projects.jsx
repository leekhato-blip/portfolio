// Projects.jsx
import StarryBackground from "./StarryBackground";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center justify-center px-6 text-center bg-gradient-to-b from-[#1e293b] via-[#334155] to-[#1e1b4b] text-gray-200"
    >
      {/* ✨ Stars */}
      <StarryBackground starCount={90} />

      <div className="relative z-10 max-w-3xl">
        <h2 className="text-4xl font-bold text-purple-300 mb-6">Projects</h2>
        <p className="text-lg text-gray-300">
          Creations born from curiosity,  
          experiments turned into experiences,  
          code woven like constellations ✨
        </p>
      </div>
    </section>
  );
};

export default Projects;
