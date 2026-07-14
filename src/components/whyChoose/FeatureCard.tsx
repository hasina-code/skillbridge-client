"use client";

import { motion } from "framer-motion";
import { Feature } from "./featuresData";

interface FeatureCardProps {
  feature: Feature;
}

export default function FeatureCard({
  feature,
}: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-gray-200 dark:border-[#1F2A44] bg-white dark:bg-[#0F172A] p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Icon */}
      <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-cyan-500 text-white shadow-lg group-hover:rotate-6 group-hover:scale-110 transition duration-300">
        <Icon size={32} />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
        {feature.description}
      </p>

      {/* Bottom Line */}
      <div className="mt-6 h-1 w-14 rounded-full bg-cyan-500 group-hover:w-24 transition-all duration-300"></div>
    </motion.div>
  );
}