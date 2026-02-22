const isCompactMotion =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(max-width: 640px)").matches;

const motionTuning = isCompactMotion
  ? {
      viewportHeaderAmount: 0.18,
      viewportSectionAmount: 0.14,
      viewportItemAmount: 0.12,
      headerY: 14,
      headerBlur: 4,
      headerDuration: 0.62,
      cardX: 16,
      cardY: 6,
      cardBlur: 5,
      cardDuration: 0.64,
      riseY: 12,
      riseBlur: 4,
      riseDuration: 0.56,
      popScale: 0.92,
      popY: 8,
      popBlur: 4,
      popStiffness: 105,
      popDamping: 18,
      popMass: 0.82,
      staggerSoft: 0.05,
      staggerSoftDelay: 0.02,
      staggerWide: 0.08,
      staggerWideDelay: 0.03,
    }
  : {
      viewportHeaderAmount: 0.32,
      viewportSectionAmount: 0.24,
      viewportItemAmount: 0.2,
      headerY: 26,
      headerBlur: 10,
      headerDuration: 0.84,
      cardX: 40,
      cardY: 12,
      cardBlur: 10,
      cardDuration: 0.88,
      riseY: 22,
      riseBlur: 8,
      riseDuration: 0.74,
      popScale: 0.84,
      popY: 14,
      popBlur: 8,
      popStiffness: 122,
      popDamping: 16,
      popMass: 0.8,
      staggerSoft: 0.09,
      staggerSoftDelay: 0.05,
      staggerWide: 0.14,
      staggerWideDelay: 0.07,
    };

export const viewportHeader = { once: true, amount: motionTuning.viewportHeaderAmount };
export const viewportSection = { once: true, amount: motionTuning.viewportSectionAmount };
export const viewportItem = { once: true, amount: motionTuning.viewportItemAmount };

const easeOutSoft = [0.22, 1, 0.36, 1];

export const sectionHeaderReveal = {
  hidden: {
    opacity: 0,
    y: motionTuning.headerY,
    scale: 0.985,
    filter: `blur(${motionTuning.headerBlur}px)`,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: motionTuning.headerDuration,
      ease: easeOutSoft,
    },
  },
};

export const cardSlideLeft = {
  hidden: {
    opacity: 0,
    x: -motionTuning.cardX,
    y: motionTuning.cardY,
    scale: 0.985,
    filter: `blur(${motionTuning.cardBlur}px)`,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: motionTuning.cardDuration,
      ease: easeOutSoft,
    },
  },
};

export const cardSlideRight = {
  hidden: {
    opacity: 0,
    x: motionTuning.cardX,
    y: motionTuning.cardY,
    scale: 0.985,
    filter: `blur(${motionTuning.cardBlur}px)`,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: motionTuning.cardDuration,
      ease: easeOutSoft,
    },
  },
};

export const riseInSoft = {
  hidden: {
    opacity: 0,
    y: motionTuning.riseY,
    scale: 0.985,
    filter: `blur(${motionTuning.riseBlur}px)`,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: motionTuning.riseDuration,
      ease: easeOutSoft,
    },
  },
};

export const popInSoft = {
  hidden: {
    opacity: 0,
    scale: motionTuning.popScale,
    y: motionTuning.popY,
    filter: `blur(${motionTuning.popBlur}px)`,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: motionTuning.popStiffness,
      damping: motionTuning.popDamping,
      mass: motionTuning.popMass,
    },
  },
};

export const staggerSoft = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTuning.staggerSoft,
      delayChildren: motionTuning.staggerSoftDelay,
    },
  },
};

export const staggerWide = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: motionTuning.staggerWide,
      delayChildren: motionTuning.staggerWideDelay,
    },
  },
};
