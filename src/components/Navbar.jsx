import { useEffect, useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { HiDownload, HiMenu, HiX } from "react-icons/hi";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const next = max > 0 ? (y / max) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, next)));
      setScrolled(y > 20);

      const marker = y + 150;
      let current = "hero";

      for (const section of sections) {
        const node = document.getElementById(section.id);
        if (!node) continue;
        if (marker >= node.offsetTop) {
          current = section.id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setActive(id);

    const node = document.getElementById(id);
    if (!node) return;

    const top = node.getBoundingClientRect().top + window.pageYOffset - 92;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-5 sm:pt-3">
      <Motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className={`mx-auto w-full max-w-7xl overflow-hidden rounded-[1.15rem] border backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-purple-200/45 bg-[#0c1328]/88 shadow-[0_18px_44px_rgba(2,6,23,0.62)]"
            : "border-purple-200/40 bg-[#0c1328]/82 shadow-[0_14px_32px_rgba(2,6,23,0.5)]"
        }`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.32),transparent_45%),radial-gradient(circle_at_88%_100%,rgba(59,130,246,0.24),transparent_35%)]"
        />

        <div className="relative flex h-[3.85rem] items-center justify-between gap-2 px-2.5 sm:h-[4.25rem] sm:gap-3 sm:px-5">
          <Motion.button
            type="button"
            onClick={() => scrollToSection("hero")}
            whileHover={{ y: -1 }}
            className="group inline-flex min-w-0 flex-1 items-center gap-2 pr-1 sm:flex-none"
            aria-label="Go to top"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-purple-300/40 bg-purple-500/20 font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-purple-100 sm:h-9 sm:w-9 sm:text-xs sm:tracking-[0.16em]">
              KL
            </span>
            <span className="whitespace-nowrap font-heading text-[1.12rem] leading-none font-semibold text-purple-100 sm:text-3xl">
              Khato Lee
            </span>
          </Motion.button>

          <ul className="hidden items-center gap-1 xl:flex">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  onFocus={() => setActive(section.id)}
                  className={`relative rounded-full px-4 py-2 font-body text-sm font-semibold transition ${
                    active === section.id
                      ? "text-slate-100"
                      : "text-slate-300 hover:text-purple-100"
                  }`}
                  aria-current={active === section.id ? "page" : undefined}
                >
                  {active === section.id && (
                    <Motion.span
                      layoutId="active-nav-pill"
                      transition={{ type: "spring", stiffness: 340, damping: 30 }}
                      className="absolute inset-0 rounded-full border border-purple-200/35 bg-gradient-to-r from-purple-500/35 to-blue-500/20"
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center xl:flex">
            <a
              href="/Khato_Lee_Resume.pdf"
              download="Khato_Lee_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-blue-500/10 px-4 py-2 font-body text-sm font-semibold text-blue-100 transition hover:bg-blue-500/20"
            >
              <HiDownload size={16} className="transition group-hover:-translate-y-[1px]" />
              Resume
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="shrink-0 rounded-lg border border-purple-300/30 bg-purple-500/12 p-2 text-purple-100 transition hover:bg-purple-500/20 xl:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>

        <div className="h-px w-full bg-white/5" />
        <div className="h-0.5 w-full bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 transition-[width] duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </Motion.div>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-3 w-full max-w-7xl overflow-hidden rounded-2xl border border-purple-200/25 bg-[#0f172a]/94 p-4 shadow-2xl backdrop-blur-xl xl:hidden"
          >
            <ul className="grid gap-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    onFocus={() => setActive(section.id)}
                    className={`w-full rounded-xl px-4 py-2.5 text-left font-body text-sm transition ${
                      active === section.id
                        ? "border border-purple-200/35 bg-purple-500/22 font-semibold text-purple-100"
                        : "border border-transparent text-slate-200 hover:border-purple-300/25 hover:bg-white/5"
                    }`}
                    aria-current={active === section.id ? "page" : undefined}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>

            <a
              href="/Khato_Lee_Resume.pdf"
              download="Khato_Lee_Resume.pdf"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-300/35 bg-blue-500/12 px-4 py-2.5 font-body text-sm font-semibold text-blue-100"
            >
              <HiDownload size={17} /> Resume
            </a>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
