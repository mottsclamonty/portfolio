'use client'
import React from "react";
import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
    initial={{y: 100, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{
        delay: 0.4,
        type: 'tween'
    }}
    ></motion.div>
  );
};

export default Divider;
