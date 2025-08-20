// Contact.jsx
import StarryBackground from "./StarryBackground";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 text-center bg-gradient-to-b from-[#f59e0b] via-[#f97316] to-[#7c2d12] text-gray-900"
    >
      {/* ✨ Fewer stars for dawn vibe */}
      <StarryBackground starCount={70} />

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-lg leading-relaxed text-gray-100">
          Every dawn brings a new story.  
          Let’s create, connect, and build something meaningful 🌅
        </p>
      </div>
    </section>
  );
};

export default Contact;
