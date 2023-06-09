"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="sticky top-0 p-4 xl:items-center flex items-start justify-between max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://instagram.com/joaorebertt"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://twitter.com/JRebertt"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/JRebertt"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://linkedin.com/in/jrebertt"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
      </motion.div>
      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </div>
    </header>
  );
}
