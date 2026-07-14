"use client";

import { SearchX } from "lucide-react";
import { motion } from "framer-motion";

export default function EmptyState() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center dark:border-slate-700 dark:bg-[#0F172A]"
    >
      {/* Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-500/20">
        <SearchX
          size={42}
          className="text-cyan-600 dark:text-cyan-400"
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        No Courses Found
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
        We couldn't find any courses that match your search or filter
        criteria. Try changing your keywords or reset the filters to
        explore all available courses.
      </p>
    </motion.div>
  );
}