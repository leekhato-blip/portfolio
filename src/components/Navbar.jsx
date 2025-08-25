import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX, HiDownload } from "react-icons/hi"; // Added HiDownload

const sections = ["hero", "about", "skills", "projects", "testimonials", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Track scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#0f172a]/50 backdrop-blur-sm shadow-md">
      <div className="flex justify-between items-center h-16">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-purple-400 cursor-pointer ml-4 md:ml-6"
          onClick={() => scrollToSection("hero")}
        >
          Khato Lee 
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 mr-4 md:mr-6 items-center">
          {sections.slice(1).map((s) => (
            <li
              key={s}
              onClick={() => scrollToSection(s)}
              className={`cursor-pointer font-body text-gray-200 hover:text-purple-300 transition relative
                          ${active === s ? "after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-purple-400 rounded" : ""}`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </li>
          ))}

          {/* Resume Download Button */}
          <li>
            <a
              href="/Khato_Lee_Resume.pdf"
              download="Khato_Lee_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
            >
              <HiDownload size={18} /> Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden mr-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} className="text-purple-400" /> : <HiMenu size={28} className="text-purple-400" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0f172a]/90 backdrop-blur-lg flex flex-col items-center py-6 gap-6"
        >
          {sections.slice(1).map((s) => (
            <li
              key={s}
              onClick={() => scrollToSection(s)}
              className={`cursor-pointer text-gray-200 text-lg hover:text-purple-300 transition
                          ${active === s ? "font-semibold text-purple-400" : ""}`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </li>
          ))}

          {/* Mobile Resume Download Button */}
          <li>
            <a
              href="/Khato_Lee_Resume.pdf"
              download="Khato_Lee_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
            >
              <HiDownload size={20} /> Resume
            </a>
          </li>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
