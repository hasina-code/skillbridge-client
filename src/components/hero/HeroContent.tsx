"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import HeroButtons from "./HeroButtons";


export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="z-10"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-5 py-2 text-cyan-500 font-medium">

        <Star size={18} fill="currentColor" />

        Learn Anytime, Anywhere

      </div>

      {/* Heading */}
      <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white">

        Learn New

        <br />

        <span className="text-cyan-500">
          Skills & Build
        </span>

        <br />

        Your Career

      </h1>

      {/* Description */}
      <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600 dark:text-gray-300">

        SkillBridge helps students, job seekers, and
        professionals master high-demand skills through
        industry-focused courses, expert mentors,
        hands-on projects, and career guidance.

      </p>

      {/* Buttons */}
      <div className="mt-10">
        <HeroButtons />
      </div>

     

      {/* Small Stats */}
      <div className="mt-10 flex flex-wrap items-center gap-8">

        <div>
          <h3 className="text-3xl font-bold text-cyan-500">
            25K+
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            Active Students
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-500">
            500+
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            Premium Courses
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-cyan-500">
            98%
          </h3>

          <p className="text-gray-600 dark:text-gray-400">
            Success Rate
          </p>
        </div>

      </div>
    </motion.div>
  );
}