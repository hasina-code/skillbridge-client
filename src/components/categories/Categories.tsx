"use client";

import { motion } from "framer-motion";

import CategoryHeader from "./CategoryHeader";
import { categories } from "./categoriesData";
import CategoryCard from "../CategoryCard";

export default function Categories() {
  return (
    <section className="bg-gray-50 py-24 dark:bg-[#081220]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <CategoryHeader />

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}