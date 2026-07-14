"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

export type CourseFormData = {
  title: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  thumbnail: string;
  shortDescription: string;
  description: string;
};

type CourseEditFormProps = {
  courseId: string;
  defaultValues: CourseFormData;
  onCancel?: () => void;
};

export default function CourseEditForm({
  courseId,
  defaultValues,
  onCancel,
}: CourseEditFormProps) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseFormData>({
    defaultValues,
  });

  const onSubmit = async (
    data: CourseFormData
  ) => {
    try {
      setLoading(true);

      await axios.put(
        `/api/courses/${courseId}`,
        data
      );

      toast.success(
        "Course updated successfully!"
      );

      router.refresh();

      if (onCancel) {
        onCancel();
      } else {
        router.push(
          "/dashboard/my-courses"
        );
      }
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to update course."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Course Title */}

      <div>
        <label className="mb-2 block font-semibold text-white">
          Course Title
        </label>

        <input
          type="text"
          {...register("title", {
            required: "Course title is required",
          })}
          className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
          placeholder="React Masterclass"
        />

        {errors.title && (
          <p className="mt-2 text-sm text-red-400">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Category & Level */}

      <div className="grid gap-6 md:grid-cols-2">
                <div>
          <label className="mb-2 block font-semibold text-white">
            Category
          </label>

          <select
            {...register("category", {
              required: "Category is required",
            })}
            className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
          >
            <option value="">Select Category</option>
            <option value="Web Development">
              Web Development
            </option>
            <option value="Programming">
              Programming
            </option>
            <option value="Design">
              Design
            </option>
            <option value="Marketing">
              Marketing
            </option>
            <option value="Business">
              Business
            </option>
          </select>

          {errors.category && (
            <p className="mt-2 text-sm text-red-400">
              {errors.category.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-semibold text-white">
            Level
          </label>

          <select
            {...register("level", {
              required: "Level is required",
            })}
            className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
          >
            <option value="">Select Level</option>
            <option value="Beginner">
              Beginner
            </option>
            <option value="Intermediate">
              Intermediate
            </option>
            <option value="Advanced">
              Advanced
            </option>
          </select>

          {errors.level && (
            <p className="mt-2 text-sm text-red-400">
              {errors.level.message}
            </p>
          )}
        </div>

      </div>

      {/* Duration & Price */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block font-semibold text-white">
            Duration
          </label>

          <input
            type="text"
            placeholder="8 Weeks"
            {...register("duration", {
              required: "Duration is required",
            })}
            className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
          />

          {errors.duration && (
            <p className="mt-2 text-sm text-red-400">
              {errors.duration.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block font-semibold text-white">
            Price ($)
          </label>

          <input
            type="number"
            {...register("price", {
              required: "Price is required",
              valueAsNumber: true,
            })}
            className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
          />

          {errors.price && (
            <p className="mt-2 text-sm text-red-400">
              {errors.price.message}
            </p>
          )}
        </div>

      </div>

      {/* Thumbnail URL */}

      <div>
        <label className="mb-2 block font-semibold text-white">
          Thumbnail URL
        </label>

        <input
          type="url"
          placeholder="https://example.com/course.jpg"
          {...register("thumbnail", {
            required: "Thumbnail URL is required",
          })}
          className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
        />

        {errors.thumbnail && (
          <p className="mt-2 text-sm text-red-400">
            {errors.thumbnail.message}
          </p>
        )}
      </div>
            {/* Short Description */}

      <div>
        <label className="mb-2 block font-semibold text-white">
          Short Description
        </label>

        <textarea
          rows={3}
          placeholder="Write a short description..."
          {...register("shortDescription", {
            required: "Short description is required",
          })}
          className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
        />

        {errors.shortDescription && (
          <p className="mt-2 text-sm text-red-400">
            {errors.shortDescription.message}
          </p>
        )}
      </div>

      {/* Full Description */}

      <div>
        <label className="mb-2 block font-semibold text-white">
          Full Description
        </label>

        <textarea
          rows={6}
          placeholder="Write the complete course description..."
          {...register("description", {
            required: "Description is required",
          })}
          className="w-full rounded-xl border border-slate-700 bg-[#0F172A] px-5 py-4 text-white outline-none transition focus:border-cyan-500"
        />

        {errors.description && (
          <p className="mt-2 text-sm text-red-400">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Action Buttons */}

      <div className="flex flex-col gap-4 pt-4 md:flex-row">

        <button
          type="submit"
          disabled={loading}
          className="flex-1 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Updating Course..."
            : "Update Course"}
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={() => {
            if (onCancel) {
              onCancel();
            } else {
              router.push("/dashboard/my-courses");
            }
          }}
          className="flex-1 rounded-2xl border border-slate-700 bg-[#0F172A] px-6 py-4 font-semibold text-slate-300 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Cancel
        </button>

      </div>

    </form>
  );
}