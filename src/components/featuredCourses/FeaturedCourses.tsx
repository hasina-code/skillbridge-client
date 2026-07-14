
import Link from "next/link";
import CourseCard, { Course } from "../CourseCard";

async function getCourses(): Promise<Course[]> {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000"
    }/api/courses`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data.slice(0, 4);
}

export default async function FeaturedCourses() {
  const courses = await getCourses();

  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              Featured Courses
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white">
              Learn New Skills
            </h2>

            <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
              Explore our most popular courses carefully
              designed by experienced instructors.
            </p>

          </div>

          <Link
            href="/courses"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            View All Courses
          </Link>

        </div>
                {/* Courses */}

        {courses.length > 0 ? (

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

            {courses.map((course) => (

              <CourseCard
                key={course._id}
                course={course}
              />

            ))}

          </div>

        ) : (

          <div className="flex h-72 flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-[#111827]">

            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              No Courses Found
            </h3>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              Courses will appear here after adding them.
            </p>

          </div>

        )}

      </div>

    </section>
  );
}