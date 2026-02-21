import { useEffect, useRef, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import StarryBackground from "./StarryBackground";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Check, X } from "lucide-react";
import { send } from "@emailjs/browser";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [showShootingStar, setShowShootingStar] = useState(false);
  const [modal, setModal] = useState({ show: false, success: true, message: "" });
  const shootingStarTimeoutRef = useRef(null);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_imf1j3h";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_5xev5na";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "RBxMNEhzLznkH2vtw";

  useEffect(
    () => () => {
      if (shootingStarTimeoutRef.current) {
        window.clearTimeout(shootingStarTimeoutRef.current);
      }
    },
    []
  );

  const openModal = (success, message) => {
    setModal({ show: true, success, message });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim().toLowerCase();
    const message = String(formData.get("message") || "").trim();

    if (name.length < 2) {
      openModal(false, "Please enter your full name.");
      return;
    }
    if (!EMAIL_PATTERN.test(email)) {
      openModal(false, "Please enter a valid email address.");
      return;
    }
    if (message.length < 10) {
      openModal(false, "Message is too short. Please add a few more details.");
      return;
    }
    if (message.length > 1200) {
      openModal(false, "Message is too long. Please keep it under 1200 characters.");
      return;
    }

    setSending(true);
    setShowShootingStar(true);

    try {
      await send(
        serviceId,
        templateId,
        {
          name,
          email,
          message,
          from_name: name,
          from_email: email,
          reply_to: email,
        },
        publicKey
      );
      openModal(true, "Message sent! Thank you — I'll get back to you soon.");
      form.reset();
    } catch {
      openModal(false, "Failed to send message. Please try again.");
    } finally {
      setSending(false);
      if (shootingStarTimeoutRef.current) {
        window.clearTimeout(shootingStarTimeoutRef.current);
      }
      shootingStarTimeoutRef.current = window.setTimeout(() => {
        setShowShootingStar(false);
      }, 900);
    }
  };

  return (
    <section
      id="contact"
      className="section-shell relative bg-gradient-to-b from-[#3b0764] via-[#1e1b4b] to-[#0f172a] px-4 py-20 text-gray-200 sm:px-6 sm:py-24"
    >
      <StarryBackground starCount={72} />
      <div className="mesh-overlay" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="mb-12 text-center"
        >
          <span className="section-kicker">Contact</span>
          <h2 className="mt-4 font-heading text-4xl text-purple-200 sm:text-5xl md:text-6xl">
            Let&apos;s connect
          </h2>
        </Motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Motion.aside
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="section-glass rounded-3xl p-6 sm:p-8"
          >
            <h3 className="font-heading text-3xl text-purple-200 sm:text-4xl">
              Open to collaboration
            </h3>
            <p className="mt-4 font-body text-gray-300">
              Whether you are building a startup product or refining an existing
              system, I can help you ship with clarity and speed.
            </p>

            <div className="mt-6 space-y-2 font-body text-sm text-gray-300">
              <p>
                <span className="text-purple-300">Preferred:</span> Contact form on this page
              </p>
              <p>
                <span className="text-blue-300">Focus:</span> React, Java, Spring Boot
              </p>
              <p>
                <span className="text-purple-300">Timezone:</span> Flexible
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-5 text-2xl text-purple-300">
              <Motion.a
                href="https://github.com/leekhato-blip"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{ scale: 1.14, color: "#c4b5fd" }}
              >
                <FaGithub />
              </Motion.a>
              <Motion.a
                href="https://www.linkedin.com/in/khato-lee-295907380/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.14, color: "#c4b5fd" }}
              >
                <FaLinkedin />
              </Motion.a>
              <Motion.a
                href="https://x.com/LeeKhato"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                whileHover={{ scale: 1.14, color: "#c4b5fd" }}
              >
                <FaTwitter />
              </Motion.a>
              <Motion.a
                href="https://www.instagram.com/khatolee7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.14, color: "#c4b5fd" }}
              >
                <FaInstagram />
              </Motion.a>
            </div>
          </Motion.aside>

          <div className="relative">
            <AnimatePresence>
              {showShootingStar && (
                <Motion.div
                  initial={{ x: -180, y: -60, opacity: 0, scale: 0.65 }}
                  animate={{ x: 500, y: 90, opacity: [0, 1, 0], scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.05, ease: "easeInOut" }}
                  className="pointer-events-none absolute left-8 top-8 z-30"
                >
                  <div
                    className="absolute -left-24 -top-1 h-1 w-56 opacity-80"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(168,85,247,0), rgba(168,85,247,0.35), rgba(168,85,247,0))",
                      filter: "blur(6px)",
                    }}
                  />
                  <div className="h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />
                </Motion.div>
              )}
            </AnimatePresence>

            <Motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              onSubmit={onSubmit}
              className="section-glass flex flex-col gap-4 rounded-3xl p-6 sm:p-8"
              aria-describedby="contact-instructions"
            >
              <p id="contact-instructions" className="sr-only">
                Fill in your name, email, and message, then submit the form.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  placeholder="Name"
                  required
                  autoComplete="name"
                  aria-label="Your name"
                  className="rounded-xl border border-white/10 bg-[#0f172a]/45 px-4 py-3 font-body text-gray-100 outline-none transition focus:border-purple-400/60"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  autoComplete="email"
                  aria-label="Your email"
                  className="rounded-xl border border-white/10 bg-[#0f172a]/45 px-4 py-3 font-body text-gray-100 outline-none transition focus:border-purple-400/60"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                required
                maxLength={1200}
                aria-label="Your message"
                className="rounded-xl border border-white/10 bg-[#0f172a]/45 px-4 py-3 font-body text-gray-100 outline-none transition focus:border-purple-400/60"
              />

              <Motion.button
                type="submit"
                whileHover={{ scale: sending ? 1 : 1.03 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                disabled={sending}
                className="glow-button mt-2 w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:self-start"
                aria-live="polite"
                aria-busy={sending}
              >
                {sending ? "Sending..." : "Send Message"}
              </Motion.button>
            </Motion.form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modal.show && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          >
            <Motion.div
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.82, opacity: 0 }}
              className="section-glass w-full max-w-sm rounded-2xl p-5 text-center sm:p-6"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setModal((prev) => ({ ...prev, show: false }))}
                  aria-label="Close notification"
                >
                  <X className="text-gray-300 transition hover:text-purple-300" />
                </button>
              </div>

              <div className="mt-1 flex flex-col items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    modal.success ? "bg-green-500/20" : "bg-red-500/20"
                  }`}
                >
                  {modal.success ? (
                    <Check className="text-green-400" />
                  ) : (
                    <X className="text-red-400" />
                  )}
                </div>
                <p className="font-body font-semibold text-purple-200">{modal.message}</p>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
