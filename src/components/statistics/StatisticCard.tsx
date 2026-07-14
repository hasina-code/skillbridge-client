"use client";

import { motion } from "framer-motion";
import { Statistic } from "./statisticsData";

interface StatisticCardProps {
  statistic: Statistic;
}

export default function StatisticCard({
  statistic,
}: StatisticCardProps) {
  const Icon = statistic.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-gray-200 dark:border-[#1F2A44] bg-white dark:bg-[#0F172A] p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500 text-white shadow-lg group-hover:rotate-6 group-hover:scale-110 transition duration-300">
        <Icon size={32} />
      </div>

      {/* Value */}
      <h2 className="mt-8 text-5xl font-extrabold text-cyan-500">
        {statistic.value}
      </h2>

      {/* Title */}
      <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
        {statistic.title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
        {statistic.description}
      </p>

      {/* Bottom Line */}
      <div className="mt-6 h-1 w-14 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-24"></div>
    </motion.div>
  );
}