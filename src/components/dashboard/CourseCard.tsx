"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import {
  Eye,
  Pencil,
  Trash2,
  Clock3,
  Tag,
} from "lucide-react";

import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export type Course = {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  shortDescription?: string;
  description?: string;
};

type CourseCardProps = {
  course: Course;
};

export default function CourseCard({
  course,
}: CourseCardProps) {
  const router = useRouter();

  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);

      await axios.delete(`/api/courses/${course._id}`);

      toast.success("Course deleted successfully!");

      setDeleteOpen(false);

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete course.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Thumbnail */}

        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}

        <div className="space-y-5 p-6">

          <div className="flex items-center justify-between">

            <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
              {course.category}
            </span>

            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
              {course.level}
            </span>

          </div>

          <h2 className="line-clamp-2 text-2xl font-bold text-white">
            {course.title}
          </h2>

          <div className="space-y-3 text-sm text-slate-400">

            <div className="flex items-center gap-2">
              <Clock3 size={16} />
              <span>{course.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <Tag size={16} />
              <span className="font-semibold text-cyan-400">
                ${course.price}
              </span>
            </div>

          </div>

          {/* Action Buttons */}

          <div className="grid grid-cols-3 gap-3 pt-2">

            <Link
              href={`/courses/${course._id}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
            >
              <Eye size={18} />
              View
            </Link>

            <button
              type="button"
              onClick={() => setEditOpen(true)}
              className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
            >
              <Pencil size={18} />
              Edit
            </button>

            <button
              type="button"
              onClick={() => setDeleteOpen(true)}
              className="flex items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              <Trash2 size={18} />
              Delete
            </button>

          </div>

        </div>

      </div>

      {/* Edit Modal */}

      <EditModal
        isOpen={editOpen}
        onOpenChange={setEditOpen}
        course={course}
      />

      {/* Delete Modal */}

      <DeleteModal
        isOpen={deleteOpen}
        loading={loading}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}