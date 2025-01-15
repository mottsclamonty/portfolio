"use client";
import { useSectionInView } from "@/lib/hooks/useSectionInView";
import React from "react";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitFormButton from "./SubmitFormButton";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      viewport={{
        once: true,
      }}
    >
      <Heading>Contact me</Heading>
      <p className="text-gray-700 -mt-3 dark:text-white/80">
        Interested in working together? You can reach me directly at{" "}
        <a
          className="underline cursor-pointer"
          href="mailto:connor@connorlamont.dev"
        >
          connor@connorlamont.dev
        </a>{" "}
        or through this form!{" "}
      </p>
      <form
        className="mt-10 flex flex-col gap-2 dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="email"
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="h-52 my-3 rounded-lg p-4 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={5000}
        />
        <SubmitFormButton />
      </form>
    </motion.section>
  );
};

export default Contact;
