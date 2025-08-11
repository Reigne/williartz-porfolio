import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Commissions from "./pages/Commission/Commissions";
import Dock from "./components/Dock/Dock";
import { GoHome } from "react-icons/go";
import { FaDollarSign } from "react-icons/fa6";
import { BiCoffeeTogo } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";

function App() {
  const navigate = useNavigate();
  const dockItems = [
    {
      icon: <GoHome className="text-2xl text-white" />,
      label: "Home",
      onClick: () => navigate("/"),
      className: "cursor-target",
    },
    {
      icon: <FaDollarSign className="text-2xl text-white" />,
      label: "Commission",
      onClick: () => navigate("/commission"),
      className: "cursor-target",
    },
    {
      icon: <BiCoffeeTogo className="text-2xl text-white" />,
      label: "Buy me a coffee",
      onClick: () => window.open("https://buymeacoffee.com/williartz", "_blank"),
      className: "cursor-target",
    },
    {
      icon: <MdOutlineMailOutline className="text-2xl text-white" />,
      label: "Email Me",
      // onClick: () => (window.location.href = "mailto:"),
      className: "cursor-target",
    },
  ];
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commission" element={<Commissions />} />
      </Routes>
      <Dock className="z-20" orientation="vertical" side="left" items={dockItems} />
    </>
  );
}

export default App;
