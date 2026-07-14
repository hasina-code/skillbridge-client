"use client";

import { motion } from "framer-motion";
import { GraduationCap, TrendingUp } from "lucide-react";

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -bottom-8 left-8 z-20"
    >
      <div className="flex items-center gap-8 rounded-3xl border border-white/20 bg-white/10 px-8 py-6 shadow-2xl backdrop-blur-xl">

        {/* Students */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500">
            <GraduationCap size={28} className="text-white" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              15K+
            </h3>

            <p className="text-sm text-gray-200">
              Students
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-16 w-px bg-white/20"></div>

        {/* Success */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500">
            <TrendingUp size={28} className="text-white" />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              98%
            </h3>

            <p className="text-sm text-gray-200">
              Success Rate
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}