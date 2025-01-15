"use client";
import React from "react";
import Heading from "./Heading";
import Project from "./Project";
import { appsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.4);

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28">
      <Heading>Apps I&apos;ve Worked On</Heading>
      <div>
        {appsData.map((app, idx) => (
          <React.Fragment key={app.title}>
            <Project {...app} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
