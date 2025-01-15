"use client";
import Image from "next/image";
import React from "react";
import HeadshotImage from "@/public/headshot.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks/useSectionInView";
import { useActiveSectionContext } from "@/lib/hooks/useActiveSectionContext";
const Introduction = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setLastSectionClicked } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={HeadshotImage}
              alt="Connor Lamont Headshot"
              quality="95"
              priority
              height={250}
              width={250}
              className="h-24 w-24 rounded-full object-cover object-top border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-[-5px] right-[-5px]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Connor.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack engineer</span> with{" "}
        <span className="font-bold">5 years</span> of experience. I love
        tackling challenging problems and collaborating to build tools that
        truly make a difference. <br className="block md:hidden" /> My expertise is{" "}
        <span className="underline">React (Next.js) with TypeScript</span>,{" "}
        <span className="underline">
          Node (Express.js), Python (Django/DRF/Flask), and Go
        </span>
        . <br />
        <br />
        I'm looking forward to connecting and creating something impactful
        together!
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setLastSectionClicked(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/resume.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/connorjacklamont/"
          target="_blank"
          className="bg-white p-4 text-gray-700 hover:text-[#0B66C2] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/mottsclamonty"
          target="_blank"
          className="bg-white p-4 text-[1.35rem] text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Introduction;
