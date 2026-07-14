"use client";

import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    value: "15K+",
    label: "Active Students",
  },
  {
    id: 2,
    icon: BookOpen,
    value: "250+",
    label: "Premium Courses",
  },
  {
    id: 3,
    icon: GraduationCap,
    value: "80+",
    label: "Expert Mentors",
  },
  {
    id: 4,
    icon: Trophy,
    value: "98%",
    label: "Success Rate",
  },
];

export default function CTAStats() {
  return (
    <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.id}
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
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="rounded-3xl border border-cyan-500/20 bg-white/10 p-8 text-center backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-white/15"
          >
            {/* Icon */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white shadow-lg">
              <Icon size={30} />
            </div>

            {/* Value */}
            <h3 className="text-4xl font-extrabold text-white">
              {stat.value}
            </h3>

            {/* Label */}
            <p className="mt-3 text-base font-medium text-slate-300">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}