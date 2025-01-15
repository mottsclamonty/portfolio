import { useInView } from "react-intersection-observer";
import { SectionName } from "../types";
import { useEffect } from "react";
import { useActiveSectionContext } from "./useActiveSectionContext";

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, lastSectionClicked } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - lastSectionClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastSectionClicked, sectionName]);

  return { ref };
};
