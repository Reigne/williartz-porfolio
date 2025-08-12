import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import TargetCursor from "../../components/TargetCursor/TargetCursor";
import ShinyText from "../../components/ShinyText/ShinyText";
import Metadata from "../../components/Layout/Metadata";

const TOS = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const maxShift = 15;
  const xShift = useTransform(mouseX, (v) => (v - 0.5) * 2 * maxShift);
  const yShift = useTransform(mouseY, (v) => (v - 0.5) * 2 * maxShift);
  const x = useSpring(xShift, { stiffness: 120, damping: 20, mass: 0.3 });
  const y = useSpring(yShift, { stiffness: 120, damping: 20, mass: 0.3 });

  // Smaller parallax magnitudes for foreground cards
  const xSmall = useTransform(x, (v) => v * 0.35);
  const ySmall = useTransform(y, (v) => v * 0.35);
  const xMedium = useTransform(x, (v) => v * 0.5);
  const yMedium = useTransform(y, (v) => v * 0.5);

  const handleMouseMove = (e) => {
    mouseX.set((e.clientX || 0) / (window.innerWidth || 1));
    mouseY.set((e.clientY || 0) / (window.innerHeight || 1));
  };

  // Scroll-in animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const frequentlyAskedQuestions = [
    {
      question: "Can I reserve a slot for a specific month of my choice?",
      answer: [
        "Absolutely! Feel free to send us a message to inquire about slot availability.",
      ],
    },
    {
      question: "Is there a payment required when reserving a slot?",
      answer: [
        "Yes, slots are allocated on a first-come, first-served basis.",
        "To secure your slot, we kindly request a 50% down payment once the deal is finalized.",
      ],
    },
    {
      question: "Are your services always available?",
      answer: [
        "Absolutely! We are open to everyone and welcome inquiries.",
        "While we can't guarantee slot availability on your preferred delivery date, we are more than happy to discuss options with you.",
      ],
    },
    {
      question: "Convention Fee",
      answer: [
        "We understand your concern. To make it fair, we'll split the PayPal fee into two parts.",
        "You will pay an additional $5, and we will cover the remaining $5.",
        "This way, you'll only need to add $5 to your order to account for the PayPal fee.",
      ],
      highlight: true,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
    >
      <Metadata
        title="Terms of Service"
        description="Terms of Service for williartz"
      />

      <TargetCursor targetSelector=".cursor-target, button" />

      <div
        aria-hidden
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none "
      >
        <motion.div
          className="absolute inset-0 blur-[10px] will-change-transform"
          style={{
            x,
            y,
            scale: 1.08,
            backgroundImage: "url('/images/background-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div aria-hidden className="absolute inset-0 z-10 bg-black/40" />

      <div className="relative z-20 w-full pl-20 md:pl-0 px-4 md:px-0 flex justify-center py-10 md:py-16">
        <div className="flex flex-col gap-8 bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-white/10 p-6 md:p-10 w-full max-w-[68rem]">
          <div className="flex flex-col items-center text-center gap-2">
            <ShinyText className="text-sm tracking-[0.2em] uppercase" text="Helpful Information" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">FAQs & Terms</h1>
            <p className="text-white/70 max-w-2xl">
              Everything you need to know before placing a commission. If you still have questions,
              feel free to reach out.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {frequentlyAskedQuestions.map((item, index) => (
              <motion.div key={index} variants={cardVariants}>
                <SpotlightCard
                  className={`cursor-target h-full hover:scale-105 transition-all duration-300 hover:bg-black/70 ${item.highlight ? "border-amber-400/40 bg-amber-300/5" : ""}`}
                  spotlightColor={item.highlight ? "rgba(251, 191, 36, 0.15)" : "rgba(255,255,255,0.18)"}
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                      {item.question}
                    </h3>
                    <div className="flex flex-col gap-2 text-white/80 text-sm md:text-base">
                      {item.answer.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-2 md:mt-4 flex flex-col items-center gap-3">
            <p className="text-white/80 text-sm md:text-base">
              Want something special? <span className="text-white font-semibold">DM for a custom order.</span>
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:williartz@gmail.com"
                className="cursor-target inline-flex items-center justify-center rounded-lg bg-white/90 text-black px-4 py-2 text-sm font-semibold hover:bg-white transition-colors"
              >
                Email Me
              </a>
              <a
                href="https://buymeacoffee.com/williartz"
                target="_blank"
                rel="noreferrer"
                className="cursor-target inline-flex items-center justify-center rounded-lg border border-white/30 text-white px-4 py-2 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Buy me a coffee
              </a>
            </div>
            <p className="text-xs text-white/50">© {new Date().getFullYear()} williartz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TOS;
