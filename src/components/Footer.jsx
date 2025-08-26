// Footer.jsx
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import StarryBackground from "./StarryBackground";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0d17] text-gray-300 py-8 overflow-hidden">
      {/* Stars in the footer */}
      <StarryBackground starCount={30} />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
        {/* Left: Brand */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-purple-400">Khato Lee</h1>
          <p className="font-body text-sm">Building the future, one line of code at a time</p>
        </div>

        {/* Center: Nav Links */}
        <div className="flex gap-3">
          <a href="#hero" className="hover:text-purple-400 transition">Home</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#testimonials" className="hover:text-purple-400 transition">Testimonials</a>
        </div>

        {/* Right: Social */}
        <div className="flex gap-4 text-xl">
          <a href="https://www.linkedin.com/in/khato-lee-295907380/" target="_blank" className="hover:text-purple-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/leekhato-blip" target="_blank" className="hover:text-purple-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/katoabdulsalamii?igsh=MTFkb3pnNHFkNnN5OA==" target="_blank" className="hover:text-purple-400 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Khato Lee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
