import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { FlipWords } from "./ui/flipword";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-[500px]">
    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
      Bienvenido a <br /> Rainbow Code
    </h2>
    
    <div className="flex items-center justify-center">
      <p className="text-xl text-neutral-700 dark:text-neutral-400">
        Somos expertos en
      </p>
      <FlipWords 
        words={["desarrollo web", "diseño UI/UX", "Java", "React", "Astro", "Python"]}
        className="font-bold text-xl text-indigo-600 ml-2"
      />
    </div>
  </BackgroundLines>
  );
}