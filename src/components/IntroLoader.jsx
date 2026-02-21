import { motion as Motion } from "framer-motion";

const starCount = 16;

function IntroLoader() {
  return (
    <Motion.div
      className="intro-loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="intro-loader__sky" aria-hidden="true">
        <span className="intro-loader__glow intro-loader__glow--violet" />
        <span className="intro-loader__glow intro-loader__glow--blue" />
      </div>

      <div className="intro-loader__orbital" aria-hidden="true">
        <span className="intro-loader__ring intro-loader__ring--outer" />
        <span className="intro-loader__ring intro-loader__ring--inner" />
        <span className="intro-loader__planet" />

        {Array.from({ length: starCount }).map((_, index) => (
          <span
            key={index}
            className="intro-loader__star"
            style={{
              "--star-angle": `${index * (360 / starCount)}deg`,
              "--star-delay": `${index * -0.18}s`,
            }}
          />
        ))}
      </div>

      <div className="intro-loader__meta">
        <p className="intro-loader__title">Khato Lee</p>
        <p className="intro-loader__caption">Composing a dreamy cosmic scene</p>
        <span className="intro-loader__progress-track" aria-hidden="true">
          <span className="intro-loader__progress-fill" />
        </span>
      </div>
    </Motion.div>
  );
}

export default IntroLoader;
