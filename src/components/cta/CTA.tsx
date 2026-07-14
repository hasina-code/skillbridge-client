"use client";

import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";
import CTAContent from "./CTAContent";
import CTAStats from "./CTAStats";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#081220] py-24">

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
          className="absolute -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]"
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
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[170px]"
        />

        {/* Center Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
        />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Content */}
        <CTAContent />

        {/* Buttons */}
        <CTAButtons />

        {/* Statistics */}
        <CTAStats />

      </div>
    </section>
  );
}