"use client";
import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks/useSectionInView";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <Heading>About me</Heading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Chemistry & Mathematics</span>, I decided
        to pursue my passion for programming. I briefly went back to school for
        Computer Science to study{" "}
        <span className="font-medium">
          software engineering design principles
        </span>{" "}
        and <span className="font-medium">full-stack development</span>.{" "}
        <span className="underline">My favorite part of programming</span> is
        the problem-solving aspect - Nothing beats the feeling of{" "}
        <span className="italic">finally </span> figuring out a solution to a
        tricky problem. My core stack is{" "}
        <span className="font-medium">TypeScript/React/Next.js</span> on the
        frontend, and <span className="font-medium">Python/Django/DRF</span> or{" "}
        <span className="font-medium">Node.js/Express.js</span> on the backend.
        I am also familiar with <span className="font-medium">GraphQL</span> and
        a variety of <span className="font-medium">databases and ORMs</span>.
        I&apos;m always looking to learn new technologies and expand my toolkit.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span> I enjoy learning new
        languages{" "}
        <span className="italic">(currently working towards C1 Spanish)</span>,
        practicing yoga and calisthenics, and improving at capoeira and
        acrobatics. Anything at the intersection of{" "}
        <span className="font-medium">tech and fitness</span> is of particular
        interest to me.
      </p>
    </motion.section>
  );
};

export default About;
