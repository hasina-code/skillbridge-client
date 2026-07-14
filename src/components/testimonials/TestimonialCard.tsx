"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Testimonial } from "./testimonialsData";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="relative rounded-3xl border border-gray-200 dark:border-[#1F2A44] bg-white dark:bg-[#0F172A] p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute right-8 top-8 text-cyan-500/20">
        <Quote size={48} />
      </div>

      {/* Profile */}
      <div className="flex items-center gap-5">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-20 w-20 rounded-full object-cover border-4 border-cyan-500"
        />

        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {testimonial.name}
          </h3>

          <p className="mt-1 text-cyan-500 font-medium">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-6 flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Review */}
      <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
        {testimonial.review}
      </p>

      {/* Bottom Line */}
      <div className="mt-8 h-1 w-16 rounded-full bg-cyan-500 transition-all duration-300 hover:w-24"></div>
    </motion.div>
  );
}