"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

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
    <div>
      <h1>
        <span> {text} </span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
