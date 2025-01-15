"use client";
import React, { createContext, useContext, useState } from "react";
import { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  lastSectionClicked: number;
  setLastSectionClicked: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionContextProvider: React.FC<
  ActiveSectionContextProviderProps
> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [lastSectionClicked, setLastSectionClicked] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        lastSectionClicked,
        setLastSectionClicked,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};


