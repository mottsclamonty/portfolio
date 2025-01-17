"use client";
import { appsData } from "@/lib/data";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof appsData)[number];

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  imageUrl,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={scrollRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="group bg-gray-100 hover:bg-gray-200 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[25rem] mb-3 sm:mb-8 last:mb-0 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 pl-4 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="hidden sm:block absolute top-8 -right-40 w-[30rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:-rotate-2 transition"
        />
      </article>
    </motion.div>
  );
};

export default Project;
