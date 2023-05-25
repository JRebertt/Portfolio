"use client";

import { motion } from "framer-motion";

export function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] mt-24 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="https://picsum.photos/200/200"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">CEO of Something</h4>
        <p className="font-bold text-2xl mt-1">Something</p>

        <div className=" flex space-x-2 my-2 ">
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>

        <p className="py-5 text-gray-300 uppercase">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
