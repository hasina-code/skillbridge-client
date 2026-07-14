"use client";

import { motion } from "framer-motion";

export default function CategoryHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className="text-center mb-16"
    >
      <span className="inline-block rounded-full border border-cyan-500 px-5 py-2 text-cyan-500 font-semibold">
        Categories
      </span>

      <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
        Explore Popular
        <span className="text-cyan-500"> Categories</span>
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
        Choose your favorite learning path and build
        real-world skills through hands-on courses.
      </p>
    </motion.div>
  );
}