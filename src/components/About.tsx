"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col h-screen text-center mt-24 md:flex-row md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/6RGmnWz/Imagem-do-Whats-App-de-2023-05-24-s-21-00-58.jpg"
        alt=""
        className="-mb-28 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-2/5 md:h-2/5 xl:w-[400px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          voluptates tenetur. Corporis saepe optio esse cum dicta, adipisci
          quidem officia dignissimos, laudantium nam veniam sed. Expedita
          tempore velit dolorum in! Illo alias dolores neque blanditiis vero
          accusamus tempore saepe eaque. Sunt doloribus hic laudantium
          necessitatibus officia ipsam possimus, cum aliquid veritatis ea
          dolore, totam excepturi nostrum voluptatibus commodi sed voluptatem!
          Natus repellendus expedita nostrum rerum quasi eveniet, at quae dicta
          dolorum aliquam ducimus, modi nulla ex quaerat necessitatibus fugiat
          placeat eligendi consequatur.
        </p>
      </div>
    </motion.div>
  );
}
