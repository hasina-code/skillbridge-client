"use client";

import { motion } from "framer-motion";
import WhyChooseHeader from "./WhyChooseHeader";
import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";

export default function WhyChooseSkillBridge() {
  return (
    <section className="relative overflow-hidden py-24 bg-white dark:bg-[#081220] transition-colors duration-300">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

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
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
        />

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
          className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[150px]"
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <WhyChooseHeader />

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}

        </div>

      </div>
    </section>
  );
}