"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function NewsletterHeader() {
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

        <Mail size={18} />

        Newsletter

      </div>

      {/* Heading */}
      <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">

        Stay Updated With

        <span className="text-cyan-500">
          {" "}
          SkillBridge
        </span>

      </h2>

      {/* Description */}
      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">

        Subscribe to our newsletter and receive the latest course updates,
        industry insights, career tips, exclusive learning resources, and
        special offers directly in your inbox.

      </p>
    </motion.div>
  );
}