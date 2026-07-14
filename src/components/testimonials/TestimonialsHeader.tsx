"use client";

import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";

export default function TestimonialsHeader() {
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
        <MessageCircleHeart size={18} />
        Student Testimonials
      </div>

      {/* Title */}
      <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
        What Our
        <span className="text-cyan-500"> Students Say</span>
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">
        Discover how SkillBridge has helped thousands of learners
        improve their skills, achieve their career goals, and gain
        confidence through practical, industry-focused education.
      </p>
    </motion.div>
  );
}