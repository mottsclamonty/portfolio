"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { SectionName } from "@/lib/types";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type Theme = "light" | "dark";

type ThemeContextType = {
  toggleDarkMode: () => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const browserTheme = localStorage.getItem("theme") as Theme | null;
    if (browserTheme) {
      setTheme(browserTheme as Theme);
      document.documentElement.classList.add(browserTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        toggleDarkMode,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
