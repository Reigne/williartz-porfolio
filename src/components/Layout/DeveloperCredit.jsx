import React from "react";

const DeveloperCredit = () => {
  return (
    <div className="fixed bottom-4 right-4 z-30">
      <div className="cursor-target select-none text-white/60 text-xs hover:text-white transition-colors duration-300">
        Developed by{" "}
        <a
          href="https://reigne-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white/80 transition-colors duration-300"
        >
          Reigne
        </a>
      </div>
    </div>
  );
};

export default DeveloperCredit;
