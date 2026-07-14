"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { Course } from "@/types/course";

type CourseFormProps = {
  initialData?: Course;
  isEdit?: boolean;
};

export default function CourseForm({
  initialData,
  isEdit = false,
}: CourseFormProps) {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<Course>({
    title: initialData?.title || "",
    category: initialData?.category || "",
    level: initialData?.level || "Beginner",
    duration: initialData?.duration || "",
    price: initialData?.price || 0,
    thumbnail: initialData?.thumbnail || "",
    shortDescription:
      initialData?.shortDescription || "",
    description:
      initialData?.description || "",

    instructorName:
      initialData?.instructorName ||
      user?.name ||
      "",

    instructorEmail:
      initialData?.instructorEmail ||
      user?.email ||
      "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "price"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const toastId = toast.loading(
      isEdit
        ? "Updating course..."
        : "Adding course..."
    );

    try {
      const url = isEdit
        ? `/api/courses/${initialData?._id}`
        : "/api/courses";

      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          instructorName: user?.name,
          instructorEmail: user?.email,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Something went wrong!"
        );
      }

      toast.success(
        isEdit
          ? "🎉 Course Updated Successfully!"
          : "🎉 Course Added Successfully!",
        {
          id: toastId,
        }
      );

      router.push(
        "/dashboard/manage-courses"
      );

      router.refresh();
    } catch (error: any) {
      toast.error(
        error.message ||
          "❌ Failed to save course.",
        {
          id: toastId,
        }
      );
    } finally {
      setLoading(false);
    }
  }

    return (
      <form
  onSubmit={handleSubmit}
  className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-[#111827]"
>
  {/* Header */}

  <div className="border-b border-slate-200 pb-6 dark:border-slate-700">
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
      {isEdit ? "Update Course" : "Add New Course"}
    </h2>

    <p className="mt-2 text-slate-500 dark:text-slate-400">
      Fill in all course information below.
    </p>
  </div>

  {/* Course Title */}

  <div>
    <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
      Course Title
    </label>

    <input
      type="text"
      name="title"
      required
      value={formData.title}
      onChange={handleChange}
      placeholder="React Masterclass"
      className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
    />
  </div>

  {/* Course Information */}

  <div className="grid gap-6 md:grid-cols-2">

    {/* Category */}

    <div>
      <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
        Category
      </label>

      <select
        name="category"
        required
        value={formData.category}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
      >
        <option value="">
          Select Category
        </option>

        <option value="Web Development">
          Web Development
        </option>

        <option value="Frontend Development">
          Frontend Development
        </option>

        <option value="Backend Development">
          Backend Development
        </option>

        <option value="Full Stack Development">
          Full Stack Development
        </option>

        <option value="Programming">
          Programming
        </option>

        <option value="Mobile Development">
          Mobile Development
        </option>

        <option value="UI/UX Design">
          UI/UX Design
        </option>

        <option value="Graphic Design">
          Graphic Design
        </option>

        <option value="Digital Marketing">
          Digital Marketing
        </option>

        <option value="Data Science">
          Data Science
        </option>

        <option value="Artificial Intelligence">
          Artificial Intelligence
        </option>

        <option value="Machine Learning">
          Machine Learning
        </option>

        <option value="Cyber Security">
          Cyber Security
        </option>

        <option value="Cloud Computing">
          Cloud Computing
        </option>

        <option value="DevOps">
          DevOps
        </option>

        <option value="Business">
          Business
        </option>

        <option value="Photography">
          Photography
        </option>
      </select>
    </div>

    {/* Level */}

    <div>
      <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
        Level
      </label>

      <select
        name="level"
        value={formData.level}
        onChange={handleChange}
        className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
      >
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
    </div>

    {/* Duration */}

    <div>
      <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
        Duration
      </label>

      <input
        type="text"
        name="duration"
        required
        value={formData.duration}
        onChange={handleChange}
        placeholder="8 Weeks"
        className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
      />
    </div>

    {/* Price */}

    <div>
      <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
        Price ($)
      </label>

      <input
        type="number"
        name="price"
        required
        value={formData.price}
        onChange={handleChange}
        placeholder="49"
        className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
      />
    </div>
  </div>

  {/* Thumbnail */}

  <div>
    <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
      Thumbnail URL
    </label>

    <input
      type="url"
      name="thumbnail"
      required
      value={formData.thumbnail}
      onChange={handleChange}
      placeholder="https://example.com/course-image.jpg"
      className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
    />
  </div>
        {/* Instructor */}

      <div className="grid gap-6 md:grid-cols-2">

        {/* Instructor Name */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
            Instructor Name
          </label>

          <input
            type="text"
            value={user?.name || ""}
            readOnly
            className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 p-4 text-slate-700 dark:border-slate-700 dark:bg-[#0B1220] dark:text-white"
          />
        </div>

        {/* Instructor Email */}

        <div>
          <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
            Instructor Email
          </label>

          <input
            type="email"
            value={user?.email || ""}
            readOnly
            className="w-full cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 p-4 text-slate-700 dark:border-slate-700 dark:bg-[#0B1220] dark:text-white"
          />
        </div>

      </div>

      {/* Short Description */}

      <div>
        <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
          Short Description
        </label>

        <textarea
          name="shortDescription"
          rows={3}
          required
          value={formData.shortDescription}
          onChange={handleChange}
          placeholder="Write a short description..."
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
        />
      </div>

      {/* Full Description */}

      <div>
        <label className="mb-2 block font-semibold text-slate-700 dark:text-white">
          Full Description
        </label>

        <textarea
          name="description"
          rows={6}
          required
          value={formData.description}
          onChange={handleChange}
          placeholder="Write the complete course description..."
          className="w-full rounded-xl border border-slate-300 bg-white p-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
        />
      </div>

      {/* Submit */}

      <div className="flex justify-end border-t border-slate-200 pt-6 dark:border-slate-700">

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading && (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
          )}

          {loading
            ? isEdit
              ? "Updating..."
              : "Adding..."
            : isEdit
            ? "Update Course"
            : "Add Course"}
        </button>

      </div>

    </form>
  );
}