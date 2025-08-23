import { useState } from "react";
import { motion } from "framer-motion";
import StarryBackground from "./StarryBackground";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [showStreak, setShowStreak] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setShowStreak(true);
    setTimeout(() => setShowStreak(false), 900); // hide streak
    // simulate send
    setTimeout(() => {
      setSending(false);
      e.target.reset();
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 
                 bg-gradient-to-b from-[#3b0764] via-[#1e1b4b] to-[#0f172a] 
                 text-gray-200 overflow-hidden"
    >
      <StarryBackground starCount={70} />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl font-bold text-purple-300 mb-12"
      >
        Let’s Connect
      </motion.h2>

      <div className="relative max-w-3xl mx-auto">
        {/* streak on submit */}
        {showStreak && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="streak" />
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="bg-white/5 backdrop-blur-md border border-purple-300/20 
                     rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
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

          <motion.button
            type="submit"
            whileHover={{ scale: sending ? 1 : 1.03, boxShadow: sending ? "none" : "0 0 35px rgba(168,85,247,0.5)" }}
            whileTap={{ scale: sending ? 1 : 0.98 }}
            disabled={sending}
            className="mt-6 w-full rounded-xl px-6 py-3 font-medium 
                       bg-gradient-to-r from-purple-600 to-blue-600
                       disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending…" : "Send Message"}
          </motion.button>
        </form>

        {/* social jewels */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {["GitHub", "LinkedIn", "Twitter", "Email"].map((s, i) => (
            <motion.a
              key={s}
              href="#"
              aria-label={s}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="w-11 h-11 rounded-full bg-white/10 border border-white/10 
                         backdrop-blur-md flex items-center justify-center 
                         hover:shadow-[0_0_25px_rgba(168,85,247,0.45)] transition"
            >
              <span className="text-xs text-purple-200">{s[0]}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
