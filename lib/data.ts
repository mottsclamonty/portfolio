import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import thinkdataworksImage from "@/public/thinkdataworks.png";
import riabizImage from "@/public/riabiz.png";
import leniImage from "@/public/leni.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Enrolled in B.Sc Computer Science",
    location: "Montréal, QC",
    description:
      "After studying the fundamentals of Computer Science for 2 years, I was offered a full-time position as a software engineer at ThinkData Works. Deciding I could learn more in the real world, I left school to accept their offer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "ThinkData Works - Software Engineer",
    location: "Toronto, ON (Hybrid)",
    description:
      "At ThinkData Works I worked as a front-end focused software engineer for 1.5 years, building complex features using React/Redux/TypeScript. During the second half of my time here I switched to the backend and expanded the company's Python SDK.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "SSG - Full-Stack Software Engineer",
    location: "Toronto, ON (Remote)",
    description:
      "During my year at SSG I worked as the lead developer on RIABiz, an online news publication targeting registered investment advisors. Some of my major accomplishments were building a brand-new sales lead generation engine in Python which increased quality monthly sales leads by 600%, and improving page load speeds by 11% through leveraging Next.js page optimizations. My stack was React, Next.js, TypeScript, Python, Django, and GraphQL.",
    icon: React.createElement(FaPython),
    date: "2022 - 2023",
  },
  {
    title: "Leni - Senior Full-Stack Software Engineer",
    location: "Toronto, ON (Hybrid)",
    description:
      "I'm now a senior full-stack engineer working at Leni, a real-estate analytics startup. During my time here I've rebuilt the frontend using TypeScript and more modern component libraries, instituted a staging environment and CI/CD frontend deployment pipeline, and built several complex app features. My stack includes React, Next.js, TypeScript, Tailwind, Node.js, Express.js, PostgreSQL, and Docker.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const appsData = [
  {
    title: "ThinkData Works Catalog",
    description:
      "I worked as a purely frontend focused engineer at this startup for 1.5 years. During that time I built a variety of tools for custom data visualization, and expanded upon the company's proprietary Python SDK.",
    tags: [
      "React",
      "TypeScript",
      "Python",
      "SCSS",
      "RPC",
    ],
    imageUrl: thinkdataworksImage,
  },
  {
    title: "RIABiz",
    description:
      "News site tailored towards registered investment advisors. I acted as solo developer on the project, improving front-end accessibility and performance metrics and building a sales lead generation engine in Python.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Material UI",
      "Python",
      "Django",
      "Docker",
      "GraphQL",
      "Apollo",
    ],
    imageUrl: riabizImage,
  },
  {
    title: "Leni",
    description:
      "An enterprise-grade SaaS web application for real estate data analytics, property portfolio report generation, and AI assistance.",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "Microservices",
    ],
    imageUrl: leniImage,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Remix",
  "Redux",
  "Redux Toolkit",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
  "Express.js",
  "Python",
  "Django",
  "Golang",
  "Prisma",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "GraphQL",
  "Apollo",
  "Docker",
] as const;
