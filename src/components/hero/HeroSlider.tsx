"use client";

import { heroSlides } from "@/data/heroSlides";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroArrows from "./HeroArrows";

import HeroStats from "./HeroStats";
import HeroDots from "./HeroDots";



export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative flex justify-center">

      {/* Main Image */}
      <div className="relative overflow-hidden rounded-[32px] border-8 border-[#14314A] shadow-2xl">

        <AnimatePresence mode="wait">

          <motion.img
            key={heroSlides[current].id}
            src={heroSlides[current].image}
            alt={heroSlides[current].title}
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="w-[650px] h-[500px] object-cover"
          />

        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Arrows */}
        <HeroArrows
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />

      </div>
      <HeroStats />

      <HeroDots
        current={current}
        setCurrent={setCurrent}
      />

    </div>
  );
}