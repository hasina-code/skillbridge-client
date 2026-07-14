"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap items-center gap-5">

      {/* Explore Courses */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/courses"
          className="group inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-cyan-600 hover:shadow-cyan-500/40"
        >
          Explore Courses

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* Watch Demo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          className="group inline-flex items-center gap-3 rounded-xl border-2 border-cyan-500 px-7 py-4 text-lg font-semibold text-cyan-500 transition-all duration-300 hover:bg-cyan-500 hover:text-white"
        >
          <PlayCircle
            size={22}
            className="transition-transform duration-300 group-hover:rotate-12"
          />

          Watch Demo
        </button>
      </motion.div>

    </div>
  );
}