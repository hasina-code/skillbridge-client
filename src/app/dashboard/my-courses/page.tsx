import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import CourseCard from "@/components/dashboard/CourseCard";

export type Course = {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  instructorEmail: string;
};

export default async function MyCoursesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

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

  const allCourses: Course[] = await res.json();

  const myCourses = allCourses.filter(
    (course) =>
      course.instructorEmail ===
      session.user.email
  );

  return (
    <div className="space-y-10">
      {/* Header */}

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            My Courses
          </h1>

          <p className="mt-2 text-slate-400">
            Manage all courses you've created.
          </p>
        </div>

        <a
          href="/dashboard/add-course"
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          + Add Course
        </a>
      </div>

      {/* Summary */}

      <div className="rounded-3xl border border-slate-800 bg-[#111827] p-6">
        <h2 className="text-lg text-slate-300">
          Total Courses
        </h2>

        <p className="mt-2 text-5xl font-bold text-cyan-400">
          {myCourses.length}
        </p>
      </div>

      {/* Empty */}

      {myCourses.length === 0 ? (
        <div className="rounded-3xl border border-slate-800 bg-[#111827] py-24 text-center">
          <h2 className="text-3xl font-bold text-white">
            No Courses Found
          </h2>

          <p className="mt-4 text-slate-400">
            Start by creating your first course.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {myCourses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
            />
          ))}
        </div>
      )}
    </div>
  );
}