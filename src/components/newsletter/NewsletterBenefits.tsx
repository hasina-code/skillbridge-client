"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BookOpen,
  Bell,
  Gift,
  Briefcase,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: BookOpen,
    title: "Weekly Learning Tips",
  },
  {
    id: 2,
    icon: Gift,
    title: "Exclusive Course Discounts",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Career Growth Advice",
  },
  {
    id: 4,
    icon: Bell,
    title: "New Course Notifications",
  },
  {
    id: 5,
    icon: BadgeCheck,
    title: "Certification Updates",
  },
];

export default function NewsletterBenefits() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className="space-y-5"
    >
      {benefits.map((benefit) => {
        const Icon = benefit.icon;

        return (
          <div
            key={benefit.id}
            className="group flex items-center gap-4 rounded-2xl border border-gray-200 dark:border-[#1F2A44] bg-white dark:bg-[#0F172A] p-5 shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500 text-white group-hover:scale-110 transition-transform duration-300">
              <Icon size={28} />
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {benefit.title}
            </h3>
          </div>
        );
      })}
    </motion.div>
  );
}