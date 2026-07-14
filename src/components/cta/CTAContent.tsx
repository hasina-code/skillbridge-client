"use client";

import { motion } from "framer-motion";

export default function CTAContent() {
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
      className="text-center max-w-4xl mx-auto"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500 px-5 py-2 text-cyan-500 font-semibold">
        🚀 Join SkillBridge Today
      </div>

      {/* Heading */}
      <h2 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-tight text-white">
        Ready to Build
        <span className="text-cyan-400"> Your Dream Career?</span>
      </h2>

      {/* Description */}
      <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
        Join thousands of learners who are mastering in-demand skills,
        earning professional certificates, and advancing their careers
        through expert-led courses on SkillBridge.
      </p>
    </motion.div>
  );
}