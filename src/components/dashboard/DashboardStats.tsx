import { headers } from "next/headers";
import {
  BookOpen,
  BadgeDollarSign,
  Layers3,
  FolderOpen,
} from "lucide-react";

type Course = {
  _id: string;
  category: string;
  price: number;
};

export default async function DashboardStats() {
  const headersList = await headers();

  const host = headersList.get("host");

  const protocol =
    process.env.NODE_ENV === "development"
      ? "http"
      : "https";

  const res = await fetch(
    `${protocol}://${host}/api/courses`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch courses.");
  }

  const courses: Course[] = await res.json();

  const totalCourses = courses.length;

  const freeCourses = courses.filter(
    (course) => course.price === 0
  ).length;

  const paidCourses = courses.filter(
    (course) => course.price > 0
  ).length;

  const totalCategories = new Set(
    courses.map((course) => course.category)
  ).size;

  const stats = [
    {
      title: "Total Courses",
      value: totalCourses,
      icon: BookOpen,
      color: "bg-cyan-500",
    },
    {
      title: "Free Courses",
      value: freeCourses,
      icon: Layers3,
      color: "bg-green-500",
    },
    {
      title: "Paid Courses",
      value: paidCourses,
      icon: BadgeDollarSign,
      color: "bg-amber-500",
    },
    {
      title: "Categories",
      value: totalCategories,
      icon: FolderOpen,
      color: "bg-purple-500",
    },
  ];

 return (
  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {stats.map((stat) => {
      const Icon = stat.icon;

      return (
        <div
          key={stat.title}
          className="rounded-3xl border border-slate-800 bg-[#111827] p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div
            className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color} text-white`}
          >
            <Icon size={28} />
          </div>

          <h3 className="text-lg font-medium text-slate-400">
            {stat.title}
          </h3>

          <p className="mt-3 text-4xl font-extrabold text-white">
            {stat.value}
          </p>
        </div>
      );
    })}
  </div>
);
}