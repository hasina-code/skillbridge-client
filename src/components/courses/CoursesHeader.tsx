"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function CoursesHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="text-center"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500 px-5 py-2 font-semibold text-cyan-500">
        <BookOpen size={18} />
        Explore Courses
      </div>

      {/* Heading */}
      <h1 className="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white lg:text-5xl">
        Discover Your Next
        <span className="text-cyan-500"> Learning Journey</span>
      </h1>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
        Browse our collection of expertly designed courses to enhance your
        skills, earn certifications, and advance your career. Filter, search,
        and find the perfect course that matches your learning goals.
      </p>
    </motion.div>
  );
}