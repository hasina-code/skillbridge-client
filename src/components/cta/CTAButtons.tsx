"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function CTAButtons() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
    >
      {/* Explore Courses */}
      <Link
        href="/courses"
        className="group inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-2xl"
      >
        <BookOpen
          size={20}
          className="transition-transform duration-300 group-hover:rotate-6"
        />

        Explore Courses

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Get Started */}
      <Link
        href="/register"
        className="group inline-flex items-center gap-3 rounded-2xl border-2 border-cyan-500 px-8 py-4 font-semibold text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-white"
      >
        Get Started

        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}