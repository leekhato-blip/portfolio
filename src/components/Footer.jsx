import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import StarryBackground from "./StarryBackground";

const Footer = () => {
  return (
    <footer className="section-shell relative overflow-hidden border-t border-purple-300/15 bg-[#0b0d17] px-4 py-10 text-gray-300 sm:px-6 sm:py-12">
      <StarryBackground starCount={30} />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.9fr_0.9fr] md:items-center">
        <div>
          <h3 className="font-heading text-3xl text-purple-200 sm:text-4xl">Khato Lee</h3>
          <p className="mt-2 max-w-sm font-body text-sm text-gray-400">
            Building elegant products where performance, clarity, and meaningful
            outcomes meet.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 font-body text-xs font-semibold sm:text-sm">
          <a href="#hero" className="rounded-full bg-white/5 px-3 py-1.5 transition hover:bg-purple-500/20 hover:text-purple-200">Home</a>
          <a href="#about" className="rounded-full bg-white/5 px-3 py-1.5 transition hover:bg-purple-500/20 hover:text-purple-200">About</a>
          <a href="#skills" className="rounded-full bg-white/5 px-3 py-1.5 transition hover:bg-purple-500/20 hover:text-purple-200">Skills</a>
          <a href="#projects" className="rounded-full bg-white/5 px-3 py-1.5 transition hover:bg-purple-500/20 hover:text-purple-200">Projects</a>
          <a href="#contact" className="rounded-full bg-white/5 px-3 py-1.5 transition hover:bg-purple-500/20 hover:text-purple-200">Contact</a>
        </div>

        <div className="flex items-center gap-4 text-xl md:justify-end">
          <a
            href="https://www.linkedin.com/in/khato-lee-295907380/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="rounded-full border border-purple-300/25 bg-purple-500/10 p-2.5 transition hover:bg-purple-500/20 hover:text-purple-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/leekhato-blip"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-full border border-purple-300/25 bg-purple-500/10 p-2.5 transition hover:bg-purple-500/20 hover:text-purple-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/khatolee7/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="rounded-full border border-purple-300/25 bg-purple-500/10 p-2.5 transition hover:bg-purple-500/20 hover:text-purple-200"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="relative z-10 mt-10 text-center font-body text-xs uppercase tracking-[0.16em] text-gray-500">
        © {new Date().getFullYear()} Khato Lee. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
