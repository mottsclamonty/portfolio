"use client";
import { useThemeContext } from "@/lib/hooks/useThemeContext";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const DarkModeToggle = () => {
  const { theme, toggleDarkMode } = useThemeContext();

  return (
    <button
      type="button"
      className="flex items-center justify-center fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 rounded-full shadow-2xl hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleDarkMode}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default DarkModeToggle;
