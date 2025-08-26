import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarryBackground from "./StarryBackground";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Check, X } from "lucide-react";
import { send } from "@emailjs/browser";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [showShootingStar, setShowShootingStar] = useState(false);
  const [modal, setModal] = useState({ show: false, success: true, message: "" });
  const btnRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setShowShootingStar(true);

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    send(
      "service_imf1j3h",
      "template_5xev5na",
      { name, email, message },
      "RBxMNEhzLznkH2vtw"
    )
      .then(() => {
        setModal({
          show: true,
          success: true,
          message: "Message sent! Thank you — I’ll get back to you soon.",
        });
        e.target.reset();
      })
      .catch(() => {
        setModal({
          show: true,
          success: false,
          message: "Failed to send message. Please try again.",
        });
      })
      .finally(() => {
        setSending(false);
        setTimeout(() => setShowShootingStar(false), 900);
      });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-[#3b0764] via-[#1e1b4b] to-[#0f172a] text-gray-200 overflow-hidden"
    >
      <StarryBackground starCount={70} />

      <h2 className="font-heading text-center text-4xl font-bold text-purple-300 mb-12">
        Let’s Connect
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Shooting star */}
        <AnimatePresence>
          {showShootingStar && (
            <motion.div
              initial={{ x: -220, y: -120, opacity: 0, scale: 0.6 }}
              animate={{ x: 720, y: 80, opacity: [0, 1, 0], scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.05, ease: "easeInOut" }}
              className="pointer-events-none absolute"
              style={{ zIndex: 50 }}
            >
              <div
                className="absolute -left-28 -top-1 w-72 h-1 opacity-80"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(168,85,247,0.0), rgba(168,85,247,0.35), rgba(168,85,247,0.0))",
                  filter: "blur(6px)",
                }}
              />
              <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="font-body bg-white/5 backdrop-blur-md border border-purple-300/20 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col gap-4"
          aria-describedby="contact-instructions"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Name"
              required
              className="w-full rounded-xl bg-[#0f172a]/40 border border-white/10 px-4 py-3 outline-none focus:border-purple-400/60"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full rounded-xl bg-[#0f172a]/40 border border-white/10 px-4 py-3 outline-none focus:border-purple-400/60"
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
            className="mt-4 w-full rounded-xl bg-[#0f172a]/40 border border-white/10 px-4 py-3 outline-none focus:border-purple-400/60"
          />

          <motion.button
            ref={btnRef}
            type="submit"
            whileHover={{ scale: sending ? 1 : 1.03 }}
            whileTap={{ scale: sending ? 1 : 0.98 }}
            disabled={sending}
            className="mx-auto mt-6 rounded-xl px-6 py-3 font-medium bg-gradient-to-r from-purple-600 to-blue-600 disabled:opacity-60 disabled:cursor-not-allowed"
            aria-live="polite"
            aria-busy={sending}
          >
            {sending ? "Sending…" : "Send Message"}
          </motion.button>
        </form>

        {/* Social icons */}
        <div className="mt-6 flex items-center justify-center gap-6 text-2xl">
          <motion.a href="https://github.com/leekhato-blip" target="_blank" aria-label="GitHub" whileHover={{ scale: 1.15, color: "#a855f7" }} className="text-purple-300 transition">
            <FaGithub />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/khato-lee-295907380/" target="_blank" aria-label="LinkedIn" whileHover={{ scale: 1.15, color: "#a855f7" }} className="text-purple-300 transition">
            <FaLinkedin />
          </motion.a>
          <motion.a href="https://x.com/LeeKhato" target="_blank" aria-label="Twitter" whileHover={{ scale: 1.15, color: "#a855f7" }} className="text-purple-300 transition">
            <FaTwitter />
          </motion.a>
          <motion.a href="https://www.instagram.com/leekhato7?igsh=MTFkb3pnNHFkNnN5OA==" target="_blank" aria-label="Instagram" whileHover={{ scale: 1.15, color: "#a855f7" }} className="text-purple-300 transition">
            <FaInstagram />
          </motion.a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className={`bg-[#1e1b4b]/90 p-6 rounded-2xl shadow-xl border border-purple-400/20 max-w-sm w-full text-center`}
            >
              <div className="flex justify-end">
                <button onClick={() => setModal({ ...modal, show: false })}>
                  <X className="text-gray-300 hover:text-purple-300" />
                </button>
              </div>
              <div className="flex flex-col items-center gap-4 mt-2">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${modal.success ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                  {modal.success ? <Check className="text-green-400" /> : <X className="text-red-400" />}
                </div>
                <p className="text-purple-200 font-semibold">{modal.message}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
