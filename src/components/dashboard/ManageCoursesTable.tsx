"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Pencil, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import DeleteModal from "./DeleteModal"; // পাথ ঠিক করে নিন

type Course = {
  _id: string;
  title: string;
  shortDescription: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  thumbnail: string;
};

type Props = {
  courses: Course[];
};

export default function ManageCoursesTable({ courses }: Props) {
  const [courseToDelete, setCourseToDelete] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!courseToDelete) return;

    try {
      const res = await fetch(`/api/courses/${courseToDelete}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete course");

      toast.success("Course deleted successfully!");
      window.location.reload(); // পেজ রিফ্রেশ করে লিস্ট আপডেট করার জন্য
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setCourseToDelete(null);
    }
  };

  return (
    <div className="w-full">
      {/* ================================================== */}
      {/* Desktop Table (Visible on large screens) */}
      {/* ================================================== */}
      <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-[#111827]">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-[#0F172A]">
              <tr>
                <th className="px-6 py-5 text-left font-semibold text-slate-900 dark:text-white">Course</th>
                <th className="px-6 py-5 text-left font-semibold text-slate-900 dark:text-white">Category</th>
                <th className="px-6 py-5 text-left font-semibold text-slate-900 dark:text-white">Level</th>
                <th className="px-6 py-5 text-left font-semibold text-slate-900 dark:text-white">Duration</th>
                <th className="px-6 py-5 text-left font-semibold text-slate-900 dark:text-white">Price</th>
                <th className="px-6 py-5 text-center font-semibold text-slate-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course._id} className="border-b border-slate-200 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900/40">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <Image src={course.thumbnail} alt={course.title} width={90} height={70} className="h-16 w-24 rounded-xl object-cover" />
                      <h3 className="font-bold text-slate-900 dark:text-white">{course.title}</h3>
                    </div>
                  </td>
                  <td className="px-6 py-5"><span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-700 dark:bg-cyan-500/20">{course.category}</span></td>
                  <td className="px-6 py-5"><span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700 dark:bg-violet-500/20">{course.level}</span></td>
                  <td className="px-6 py-5 text-slate-700 dark:text-slate-300">{course.duration}</td>
                  <td className="px-6 py-5 font-bold text-green-600">${course.price.toFixed(2)}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-3">
                      <Link href={`/courses/${course._id}`} className="rounded-xl bg-cyan-500 p-3 text-white hover:bg-cyan-600"><Eye size={18} /></Link>
                      <Link href={`/dashboard/manage-courses/${course._id}`} className="rounded-xl bg-amber-500 p-3 text-white hover:bg-amber-600"><Pencil size={18} /></Link>
                      <button onClick={() => setCourseToDelete(course._id)} className="rounded-xl bg-red-500 p-3 text-white hover:bg-red-600"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================================================== */}
      {/* Mobile Card Layout (Visible on small screens) */}
      {/* ================================================== */}
      <div className="lg:hidden space-y-4">
        {courses.map((course) => (
          <div key={course._id} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-md dark:border-slate-800 dark:bg-[#111827]">
            <Image src={course.thumbnail} alt={course.title} width={400} height={200} className="w-full h-40 rounded-2xl object-cover mb-4" />
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{course.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-500/20">{course.category}</span>
              <span className="rounded-full bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-500/20">{course.level}</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-500 dark:text-slate-400">{course.duration}</span>
              <span className="font-bold text-green-600 text-lg">${course.price.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Link href={`/courses/${course._id}`} className="flex justify-center rounded-xl bg-cyan-500 p-3 text-white"><Eye size={20} /></Link>
              <Link href={`/dashboard/manage-courses/${course._id}`} className="flex justify-center rounded-xl bg-amber-500 p-3 text-white"><Pencil size={20} /></Link>
              <button onClick={() => setCourseToDelete(course._id)} className="flex justify-center rounded-xl bg-red-500 p-3 text-white"><Trash2 size={20} /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Integration */}
      <DeleteModal 
        isOpen={!!courseToDelete} 
        onClose={() => setCourseToDelete(null)} 
        onConfirm={handleDelete} 
      />
    </div>
  );
}