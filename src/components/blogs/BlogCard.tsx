"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";
import { Blog } from "./blogsData";
import ReadMoreButton from "./ReadMoreButton";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({
  blog,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 dark:border-[#1F2A44] bg-white dark:bg-[#0F172A] shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Blog Image */}
      <div className="relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Date & Read Time */}
        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            {blog.date}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {blog.readTime}
          </div>

        </div>

        {/* Title */}
        <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7 line-clamp-3">
          {blog.description}
        </p>

        {/* Read More */}
        <div className="mt-8">
          <ReadMoreButton />
        </div>

      </div>
    </motion.div>
  );
}