"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock3, Star, Users } from "lucide-react";

export type Course = {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  thumbnail: string;
  instructorName: string;
  instructorEmail: string;
  rating?: number;
  students?: number;
  lessons?: number;
};

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all hover:shadow-2xl dark:border-slate-800 dark:bg-[#111827]"
    >
      {/* Thumbnail */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-4 top-4 flex justify-between">
          <span className="rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-bold text-white shadow-md">
            {course.category}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-900 backdrop-blur-sm dark:bg-slate-900/80 dark:text-slate-200">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-3 line-clamp-2 text-xl font-bold text-slate-900 dark:text-white">
          {course.title}
        </h2>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {course.shortDescription}
        </p>

        <p className="mb-5 text-sm font-medium text-cyan-600 dark:text-cyan-400">
          By <span className="underline decoration-cyan-500/30 underline-offset-4">{course.instructorName}</span>
        </p>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-[#0F172A]">
          <StatItem icon={<Star className="fill-yellow-400 text-yellow-400" size={16} />} value={course.rating ?? 4.8} />
          <StatItem icon={<Users className="text-slate-500" size={16} />} value={`${course.students ?? 1200} Students`} />
          <StatItem icon={<Clock3 className="text-slate-500" size={16} />} value={course.duration} />
          <StatItem icon={<BookOpen className="text-slate-500" size={16} />} value={`${course.lessons ?? 30} Lessons`} />
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-800">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Price</p>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">${course.price}</h3>
          </div>
          <Link
            href={`/courses/${course._id}`}
            className="group/btn flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-bold text-white transition-all hover:bg-cyan-600 hover:shadow-lg"
          >
            Details
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

// Helper Component for Stats
function StatItem({ icon, value }: { icon: React.ReactNode; value: string | number }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{value}</span>
    </div>
  );
}