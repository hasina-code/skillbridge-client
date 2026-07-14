"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

export default function StatisticsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500 px-5 py-2 text-cyan-500 font-semibold">
        <BarChart3 size={18} />
        Learning Statistics
      </div>

      {/* Title */}
      <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
        Our Impact in
        <span className="text-cyan-500"> Numbers</span>
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">
        Thousands of students have transformed their careers through
        SkillBridge. Our growing community reflects our commitment to
        quality education, expert mentorship, and real-world learning.
      </p>
    </motion.div>
  );
}