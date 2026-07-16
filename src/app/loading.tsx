"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 dark:bg-[#081220]">

      {/* Spinner */}

      <div className="relative">

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-20 w-20 rounded-full border-4 border-cyan-200 border-t-cyan-500"
        />

        <motion.div
          animate={{
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <GraduationCap
            size={34}
            className="text-cyan-500"
          />
        </motion.div>

      </div>

      {/* Text */}

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .3 }}
        className="mt-8 text-2xl font-bold text-slate-800 dark:text-white"
      >
        Loading SkillBridge...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .6 }}
        className="mt-2 text-slate-500 dark:text-slate-400"
      >
        Preparing your learning experience...
      </motion.p>

    </div>
  );
}