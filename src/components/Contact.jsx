// Contact.jsx
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarryBackground from "./StarryBackground";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Check } from "lucide-react";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [showShootingStar, setShowShootingStar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const btnRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setShowShootingStar(true);
    setShowPopup(true);

    // Hide shooting star shortly after animation
    setTimeout(() => setShowShootingStar(false), 900);

    // Simulate send + auto hide popup (timings tuned for smoothness)
    setTimeout(() => {
      setSending(false);
      e.target.reset();
    }, 1100);

    // Auto-hide popup after a little while
    setTimeout(() => setShowPopup(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 
                 bg-gradient-to-b from-[#3b0764] via-[#1e1b4b] to-[#0f172a] 
                 text-gray-200 overflow-hidden"
    >
      {/* Background */}
      <StarryBackground starCount={70} />

      <h2 className="text-center text-4xl font-bold text-purple-300 mb-12">
        Let’s Connect
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Shooting star (visual trail + head) */}
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
              {/* tail */}
              <div
                className="absolute -left-28 -top-1 w-72 h-1 opacity-80"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(168,85,247,0.0), rgba(168,85,247,0.35), rgba(168,85,247,0.0))",
                  filter: "blur(6px)",
                }}
              />
              {/* star head */}
              <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Form container (relative so popup can position against it) */}
        <div className="relative">
          <form
            onSubmit={onSubmit}
            className="bg-white/5 backdrop-blur-md border border-purple-300/20 
                       rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col gap-4"
            aria-describedby="contact-instructions"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-xl bg-[#0f172a]/40 border border-white/10 px-4 py-3 outline-none 
                           focus:border-purple-400/60"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-xl bg-[#0f172a]/40 border border-white/10 px-4 py-3 outline-none 
                           focus:border-purple-400/60"
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              required
              className="mt-4 w-full rounded-xl bg-[#0f172a]/40 border border-white/10 px-4 py-3 outline-none 
                         focus:border-purple-400/60"
            />

            <div className="relative flex items-center">
              {/* Submit button */}
              <motion.button
                ref={btnRef}
                type="submit"
                whileHover={{ scale: sending ? 1 : 1.03 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                disabled={sending}
                className="mx-auto mt-6 rounded-xl px-6 py-3 font-medium 
                           bg-gradient-to-r from-purple-600 to-blue-600
                           disabled:opacity-60 disabled:cursor-not-allowed"
                aria-live="polite"
                aria-busy={sending}
              >
                {sending ? "Sending…" : "Send Message"}
              </motion.button>

              {/* Popup sits absolutely near the button and animates out of it */}
              <div className="absolute right-0 left-0 top-full flex justify-center pointer-events-none">
                <AnimatePresence>
                  {showPopup && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.85 }}
                      animate={{ opacity: 1, y: -12, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.9 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="pointer-events-auto mt-4"
                      style={{ zIndex: 60 }}
                    >
                      <div className="flex items-center gap-4 bg-[#1e1b4b]/90 px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgba(16,24,40,0.6)] border border-purple-400/10">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10">
                          <Check className="text-purple-300" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-purple-200">
                            Message sent
                          </p>
                          <p className="text-xs text-gray-400">
                            Thank you — I’ll get back to you soon, InshaAllah.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </form>

          {/* Social icons below form */}
          <div className="mt-6 flex items-center justify-center gap-6 text-2xl">
            <motion.a
              href="#"
              aria-label="GitHub"
              whileHover={{ scale: 1.15, color: "#a855f7" }}
              className="text-purple-300 transition"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="#"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.15, color: "#a855f7" }}
              className="text-purple-300 transition"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Twitter"
              whileHover={{ scale: 1.15, color: "#a855f7" }}
              className="text-purple-300 transition"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="#"
              aria-label="Email"
              whileHover={{ scale: 1.15, color: "#a855f7" }}
              className="text-purple-300 transition"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
