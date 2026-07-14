"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function WhyChooseHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {/* <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500 text-cyan-500 font-semibold">
        <Sparkles size={18} />
        Why Choose Us
      </div> */}

      <h2 className="mt-6 text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
        Why Choose
        <span className="text-cyan-500">
          {" "}SkillBridge
        </span>
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 dark:text-gray-300">
        We provide everything you need to learn modern skills,
        build real projects, earn certificates, and grow your
        career with confidence.
      </p>
    </motion.div>
  );
}