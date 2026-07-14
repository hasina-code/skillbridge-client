"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import BlogsHeader from "./BlogsHeader";
import { blogs } from "./blogsData";

export default function LatestBlogs() {
  return (
    <section className="relative overflow-hidden py-24 bg-white dark:bg-[#081220] transition-colors duration-300">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Left Glow */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        {/* Right Glow */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[160px]"
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <BlogsHeader />

        {/* Blog Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}