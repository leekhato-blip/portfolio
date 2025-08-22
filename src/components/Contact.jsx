import { div } from "framer-motion/client"
import StarryBackground from "./StarryBackground";

// Contact.jsx
const Contact = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 text-center 
                    bg-gradient-to-b from-[#334155] via-[#1e293b] to-[#0f172a] text-gray-100">
        <StarryBackground starCount={80} />
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-lg leading-relaxed text-gray-100">
          Every dawn brings a new story.  
          Let’s create, connect, and build something meaningful 🌅
        </p>
      </div>
    </section>
    </div>
  );
};

export default Contact;
