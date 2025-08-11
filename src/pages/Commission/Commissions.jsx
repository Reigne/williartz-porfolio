import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { FaDollarSign } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { BiCoffeeTogo } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiStar } from "react-icons/hi2";

import { useNavigate } from "react-router-dom";

import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import TargetCursor from "../../components/TargetCursor/TargetCursor";
import ShinyText from "../../components/ShinyText/ShinyText";
import Metadata from "../../components/Layout/Metadata";

const Commissions = () => {
  const navigate = useNavigate();
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
        title="Commissions"
        description="williartz is a digital artist"
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

      <div className="relative z-20 w-full pl-20 md:pl-0 px-4 md:px-0 flex justify-center py-8">
        <div className="flex flex-col gap-8 bg-white/5 backdrop-blur-sm rounded-xl border-2 border-white/5 p-6 w-full max-w-[90rem] ">
          <p className="text-4xl text-white font-bold flex items-center gap-2">
            PRICE LIST <HiStar className="text-3xl text-white" />
          </p>

          <div className="flex flex-col gap-8 w-full">
            {/* FULL BODY CHARACTER */}
            <div className="flex flex-col gap-2">
              <motion.div
                className="w-full h-[700px] bg-white/10 rounded-xl border border-white"
                style={{
                  x: xSmall,
                  y: ySmall,
                  backgroundImage: "url('/images/background-1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex flex-col justify-end h-full gap-2 w-full p-8">
                  <div className="flex flex-col gap-2 bg-black/40 p-4 w-fit backdrop-blur-xs cursor-target hover:bg-black/90 transition-all duration-600">
                    <p className="text-4xl text-white font-bold">110$</p>
                    <p className="text-xl text-white">FULL BODY CHARACTER</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* BACKGROUNDS */}
            <div className="flex flex-col gap-2">
              <motion.div
                className="w-full h-[700px] bg-white/10 rounded-xl border border-white"
                style={{
                  x: xMedium,
                  y: yMedium,
                  backgroundImage: "url('/images/commissions/image-2.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="flex items-end justify-end h-full gap-2 w-full p-8">
                  <div className="flex flex-col gap-2 items-end">
                    <div className="flex flex-col gap-2 bg-black/40 p-4  h-fit backdrop-blur-xs cursor-target hover:bg-black/90 transition-all duration-600 min-w-[300px]">
                      <p className="text-3xl text-white font-bold">50$</p>
                      <p className="text-lg text-white">BACKGROUND LANDSCAPE</p>
                    </div>

                    <div className="flex flex-col gap-2 bg-black/40 p-4  h-fit backdrop-blur-xs cursor-target hover:bg-black/90 transition-all duration-600 min-w-[300px]">
                      <p className="text-3xl text-white font-bold">40$</p>
                      <p className="text-lg text-white">PORTRAIT BACKGROUND</p>
                    </div>

                    <div className="flex flex-col gap-2 bg-black/40 p-4 h-fit backdrop-blur-xs cursor-target hover:bg-black/90 transition-all duration-600 min-w-[300px]">
                      <p className="text-3xl text-white font-bold">10$</p>
                      <p className="text-lg text-white">SIMPLE BACKGROUND</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 2 COLUMNS */}
            <div className="flex gap-4">
              {/* KNEE UP CHARACTER */}
              <div className="flex flex-col gap-2 w-1/2">
                <motion.div
                  className="w-full h-[900px] bg-white/10 rounded-xl border border-white"
                  style={{
                    x: xSmall,
                    y: ySmall,
                    backgroundImage: "url('/images/commissions/image-3a.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="flex items-start justify-start h-full gap-2 w-full p-8">
                    <div className="flex flex-col gap-2 items-end">
                      <div className="flex flex-col gap-2 bg-black/40 p-4  h-fit backdrop-blur-xs cursor-target hover:bg-black/90 transition-all duration-600 min-w-[300px]">
                        <p className="text-3xl text-white font-bold">90$</p>
                        <p className="text-lg text-white">KNEE UP CHARACTER</p>
                      </div>

                      <div className="flex flex-col gap-2 bg-black/40 p-4  h-fit backdrop-blur-xs cursor-target hover:bg-black/90 transition-all duration-600 min-w-[300px]">
                        <p className="text-3xl text-white font-bold">70$</p>
                        <p className="text-lg text-white">
                          HALF BODY CHARACTER
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CHARACTER ICON / HEAD */}
              <div className="flex flex-col gap-2 w-1/2">
                <motion.div
                  className="w-full h-[900px] bg-white/10 rounded-xl border border-white"
                  style={{
                    x: xMedium,
                    y: yMedium,
                    backgroundImage: "url('/images/commissions/image-4.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="flex items-end justify-end h-full gap-2 w-full p-8">
                    <div className="flex flex-col gap-2 items-end">
                      <div className="flex flex-col gap-2 bg-black/40 p-4  h-fit backdrop-blur-xs cursor-target hover:bg-black/90 transition-all duration-600 min-w-[300px]">
                        <p className="text-3xl text-white font-bold">50$</p>
                        <p className="text-lg text-white">
                          CHARACTER ICON / HEAD
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* EXTRAS */}
            <div className="flex flex-col gap-4">
              <p className="text-3xl text-white font-semibold tracking-wide">EXTRAS</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 cursor-target hover:bg-white/10 transition-all duration-600">
                  <p className="text-2xl font-bold text-white">40–50$</p>
                  <p className="text-white">Twitch Alerts / Panels</p>
                  <p className="text-xs text-neutral-300">Depends on complexity</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 cursor-target hover:bg-white/10 transition-all duration-600">
                  <p className="text-2xl font-bold text-white">20–30$</p>
                  <p className="text-white">Twitch/Discord Emotes (each)</p>
                  <p className="text-xs text-neutral-300">Depends on complexity</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 cursor-target hover:bg-white/10 transition-all duration-600">
                  <p className="text-2xl font-bold text-white">40–60$</p>
                  <p className="text-white">Chibi!!</p>
                  <p className="text-xs text-neutral-300">Depends on complexity</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 cursor-target hover:bg-white/10 transition-all duration-600">
                  <p className="text-2xl font-bold text-white">- - $</p>
                  <p className="text-white">Character Sheet</p>
                  <p className="text-xs text-neutral-300">DM for information</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 cursor-target hover:bg-white/10 transition-all duration-600">
                  <p className="text-2xl font-bold text-white">5–20$</p>
                  <p className="text-white">Pets</p>
                  <p className="text-xs text-neutral-300">Depends on complexity</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 cursor-target hover:bg-white/10 transition-all duration-600">
                  <p className="text-2xl font-bold text-white">15$</p>
                  <p className="text-white">Source File</p>
                  <p className="text-xs text-neutral-300">File itself only</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 cursor-target hover:bg-white/10 transition-all duration-600">
                  <p className="text-2xl font-bold text-white">60$</p>
                  <p className="text-white">Source File</p>
                  <p className="text-xs text-neutral-300">Separated layers</p>
                </div>
                <div className="sm:col-span-2 lg:col-span-3 rounded-xl border border-white/10 bg-white/5 p-4 cursor-target hover:bg-white/10 transition-all duration-600">
                  <p className="text-2xl font-bold text-white">100$</p>
                  <p className="text-white">Commercial Use</p>
                  <p className="text-xs text-neutral-300">
                    any reproduction or purpose that is marketed, promoted, or sold and incorporates a financial transaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commissions;
