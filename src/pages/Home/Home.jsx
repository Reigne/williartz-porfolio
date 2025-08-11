import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { BiCoffeeTogo } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";

import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import TargetCursor from "../../components/TargetCursor/TargetCursor";
import ShinyText from "../../components/ShinyText/ShinyText";
import Dock from "../../components/Dock/Dock";

const Home = () => {
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
    >
      <TargetCursor targetSelector=".cursor-target, button" />
      <div
        aria-hidden
        className="absolute inset-0 z-0 blur-[0.9px] scale-100"
        style={{
          backgroundImage: "url('/images/background-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div aria-hidden className="absolute inset-0 z-10 bg-black/40" />
      <div className="relative z-20 w-full pl-20 md:pl-0 px-4 md:px-0 flex justify-center">
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
              href="https://www.facebook.com/williartzs"
              target="_blank"
              className="cursor-target flex justify-between items-center gap-2 border-2 border-white border-dashed text-white px-6 py-4 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all duration-600 bg-white/20"
            >
              <p className="text-lg font-medium">Facebook</p>
              <FaFacebook className="text-2xl" />
            </a>
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
              <FaInstagram className="text-2xl" />
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
      </div>
      <Dock
        className="z-20"
        orientation="vertical"
        side="left"
        items={[
          {
            icon: <GoHome className="text-2xl text-white" />,
            label: "Home",
            onClick: () => window.open("/", "_blank"),
            className: "cursor-target",
          },
          {
            icon: <BiCoffeeTogo className="text-2xl text-white" />,
            label: "Buy me a coffee",
            onClick: () =>
              window.open("https://buymeacoffee.com/williartz", "_blank"),
            className: "cursor-target",
          },

          {
            icon: <MdOutlineMailOutline className="text-2xl text-white" />,
            label: "Email Me",
            // onClick: () => (window.location.href = "mailto:"),
            className: "cursor-target",
          },
        ]}
      />
    </div>
  );
};

export default Home;
