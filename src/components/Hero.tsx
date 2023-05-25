"use client";
import Link from "next/link";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BackgroundCircles } from "./BackgroundCircles";

export function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's João Rebertt",
      "Guy-who-loves-pizz.tsx",
      "<ButLovesToCoreMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        alt="Image Profail Github"
        src="https://avatars.githubusercontent.com/u/63752498?v=4"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <a href="/#about">
            <button className="heroButton">About</button>
          </a>
          <a href="#experience">
            <button className="heroButton">Experience</button>
          </a>
          <a href="#skills">
            <button className="heroButton">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton">Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
}
