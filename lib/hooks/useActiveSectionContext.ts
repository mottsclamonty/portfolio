import { useContext } from "react";
import { ActiveSectionContext } from "@/context/ActiveSectionContext";

export const useActiveSectionContext = () => {
    const ctx = useContext(ActiveSectionContext);
    if (!ctx)
      throw new Error(
        "useActiveSectionContext must be used within a ActiveSectionContextProvider"
      );
  
    return ctx;
  };