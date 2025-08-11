import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaUser } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa6";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { AiFillInstagram } from "react-icons/ai";
import { HiUser } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import TargetCursor from "../../components/TargetCursor/TargetCursor";
import ShinyText from "../../components/ShinyText/ShinyText";
import Metadata from "../../components/Layout/Metadata";

const Home = () => {
  const navigate = useNavigate();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const maxShift = 15;
  const xShift = useTransform(mouseX, (v) => (v - 0.5) * 2 * maxShift);
  const yShift = useTransform(mouseY, (v) => (v - 0.5) * 2 * maxShift);
  const x = useSpring(xShift, { stiffness: 120, damping: 20, mass: 0.3 });
  const y = useSpring(yShift, { stiffness: 120, damping: 20, mass: 0.3 });

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
      <Metadata title="Home" description="williartz is a digital artist" />

      <TargetCursor targetSelector=".cursor-target, button" />
      <div aria-hidden className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 blur-[0.9px] will-change-transform"
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
      <motion.div
        className="relative z-20 w-full pl-20 md:pl-0 px-4 md:px-0 flex justify-center"
        initial={{ opacity: 0, y: 80, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 16, mass: 0.6, delay: 0.2, duration: 2 }}
      >
        <SpotlightCard
          className="relative z-20 max-w-lg w-[100%] text-white text-center"
          spotlightColor="rgb(122, 67, 142)"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="/images/2024-avatar.jpg"
                  alt="profile"
                  className="w-full h-full object-cover scale-300"
                />
              </div>
              <ShinyText text="william d'arts" className="text-4xl font-bold" />
              <p className="text-neutral-400">@williartz</p>
              <p className="text-md text-neutral-300">
                <span className="text-neutral-400">🇵🇭</span> PH/ENG |
                delulu-strator | maid | #williartz | DM for more infomartion
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full mt-8">
              <a
                href="https://x.com/williartz"
                target="_blank"
                className="cursor-target flex justify-between items-center gap-2 border-2 border-white border-dashed text-white px-6 py-4 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-600 bg-white/20"
              >
                <p className="text-lg font-medium">Twitter</p>
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/williartz"
                target="_blank"
                className="cursor-target flex justify-between items-center gap-2 border-2 border-white border-dashed text-white px-6 py-4 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-600 bg-white/20"
              >
                <p className="text-lg font-medium">Instagram</p>
                <AiFillInstagram className="text-2xl" />
              </a>
              <a
                href="https://x.com/williartz"
                target="_blank"
                className="cursor-target flex justify-between items-center gap-2 border-2 border-white border-dashed text-white px-6 py-4 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-600 bg-white/20"
              >
                <p className="text-lg font-medium">About Me</p>
                <HiUser className="text-2xl" />
              </a>
              <Link
                to="/commission"
                className="cursor-target flex justify-between items-center gap-2 border-2 border-white border-dashed text-white px-6 py-4 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-600 bg-white/20"
              >
                <p className="text-lg font-medium">Commission</p>
                <HiMiniPaintBrush className="text-2xl" />
              </Link>
              <a
                href="https://x.com/williartz"
                target="_blank"
                className="cursor-target flex justify-between items-center gap-2 border-2 border-white border-dashed text-white px-6 py-4 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-600 bg-white/20"
              >
                <p className="text-lg font-medium">Terms of Service</p>
                <FaFileContract className="text-2xl" />
              </a>
            </div>

            {/* created by */}
            <div className="flex justify-between items-center gap-2 mt-8">
              <p className="text-neutral-300 text-xs ">
                Created by{" "}
                <a
                  href="https://reigne-portfolio.vercel.app"
                  className="text-white cursor-target"
                >
                  Reigne
                </a>
              </p>
            </div>
          </div>
        </SpotlightCard>
      </motion.div>
      
    </div>
  );
};

export default Home;
