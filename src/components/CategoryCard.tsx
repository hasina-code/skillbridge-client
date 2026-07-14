"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Category } from "./categories/categoriesData";


interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="group rounded-3xl border border-gray-200 dark:border-[#1F2A44] bg-white dark:bg-[#0F172A] p-7 shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Icon */}
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} text-white shadow-lg`}
      >
        <Icon size={30} />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
        {category.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-600 dark:text-gray-300 leading-7">
        {category.description}
      </p>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between">
        <span className="rounded-full bg-cyan-100 dark:bg-cyan-900/30 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400">
          {category.courses}+ Courses
        </span>

        <button className="flex items-center gap-2 font-semibold text-cyan-500 transition group-hover:translate-x-1">
          Explore
          <ArrowRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}