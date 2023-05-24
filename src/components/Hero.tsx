"use client";

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
      <h1>
        <BackgroundCircles />
        <span> {text} </span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
