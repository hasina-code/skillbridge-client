"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HeroArrowsProps {
  nextSlide: () => void;
  prevSlide: () => void;
}

export default function HeroArrows({
  nextSlide,
  prevSlide,
}: HeroArrowsProps) {
  return (
    <>
      {/* Previous Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSlide}
        className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-lg transition hover:bg-cyan-500"
      >
        <ChevronLeft size={26} />
      </motion.button>

      {/* Next Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSlide}
        className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-lg transition hover:bg-cyan-500"
      >
        <ChevronRight size={26} />
      </motion.button>
    </>
  );
}