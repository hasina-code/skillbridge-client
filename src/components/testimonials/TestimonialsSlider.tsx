"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialsData";

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">

      {/* Testimonial Card */}
      <AnimatePresence mode="wait">

        <motion.div
          key={testimonials[current].id}
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -80,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <TestimonialCard
            testimonial={testimonials[current]}
          />
        </motion.div>

      </AnimatePresence>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-[#1F2A44] shadow-lg flex items-center justify-center hover:bg-cyan-500 hover:text-white transition"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-[#1F2A44] shadow-lg flex items-center justify-center hover:bg-cyan-500 hover:text-white transition"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="mt-10 flex justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-cyan-500"
                : "w-3 bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>

    </div>
  );
}