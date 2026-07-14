"use client";

import { motion } from "framer-motion";
import { CircleHelp } from "lucide-react";

export default function FAQHeader() {
  return (
    <motion.div
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
        duration: 0.6,
      }}
      className="text-center"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500 px-5 py-2 text-cyan-500 font-semibold">
        <CircleHelp size={18} />
        Frequently Asked Questions
      </div>

      {/* Title */}
      <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
        Got Questions?
        <span className="text-cyan-500"> We've Got Answers</span>
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">
        Find answers to the most common questions about SkillBridge,
        our courses, certifications, enrollment process, and learning
        experience. If you still need help, our support team is always
        ready to assist you.
      </p>
    </motion.div>
  );
}