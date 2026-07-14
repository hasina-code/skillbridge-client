"use client";

import { motion } from "framer-motion";

interface HeroDotsProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

export default function HeroDots({
  // current,
  // setCurrent,
}: HeroDotsProps) {
  return (
    <div className="absolute -bottom-14 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
      {[0, 1, 2].map((index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrent(index)}
          className={`rounded-full transition-all duration-300 ${
            current === index
              ? "h-3 w-10 bg-cyan-500"
              : "h-3 w-3 bg-gray-300 dark:bg-gray-600 hover:bg-cyan-400"
          }`}
        />
      ))}
    </div>
  );
}