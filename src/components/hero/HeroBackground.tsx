"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Top Left Glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

      {/* Bottom Right Glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]"
      />

      {/* Center Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

    </div>
  );
}