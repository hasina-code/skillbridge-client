"use client";

import { motion } from "framer-motion";
import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsSlider from "./TestimonialsSlider";


export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-24 bg-white dark:bg-[#081220] transition-colors duration-300">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Left Glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        {/* Right Glow */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[160px]"
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <TestimonialsHeader />

        {/* Slider */}
        <div className="mt-16">
          <TestimonialsSlider />
        </div>

      </div>

    </section>
  );
}