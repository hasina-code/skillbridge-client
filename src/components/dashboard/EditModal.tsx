"use client";

import { X, Pencil } from "lucide-react";
import CourseEditForm, {
  CourseFormData,
} from "./CourseEditForm";

type EditModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  course: {
    _id: string;
    title: string;
    shortDescription?: string;
    description?: string;
    category: string;
    level: string;
    duration: string;
    price: number;
    thumbnail: string;
  };
};

export default function EditModal({
  isOpen,
  onOpenChange,
  course,
}: EditModalProps) {
  if (!isOpen) return null;

  const defaultValues: CourseFormData = {
    title: course.title,
    shortDescription:
      course.shortDescription ?? "",
    description:
      course.description ?? "",
    category: course.category,
    level: course.level,
    duration: course.duration,
    price: course.price,
    thumbnail: course.thumbnail,
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#111827]">

        {/* Header */}

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#111827]">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-white">
              <Pencil size={22} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Edit Course
              </h2>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Update your course information
              </p>
            </div>

          </div>

          <button
            onClick={() => onOpenChange(false)}
            className="rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={22} />
          </button>

        </div>

        {/* Form Container */}

        <div className="p-8">
          <CourseEditForm
            courseId={course._id}
            defaultValues={defaultValues}
          />
        </div>

      </div>
    </div>
  );
}