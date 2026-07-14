import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import StatsCards from "@/components/dashboard/StatsCards";

type Course = {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  level: string;
  duration: string;
  price: number;
};

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

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

  const recentCourses = courses.slice(0, 3);

  const stats = {
    totalCourses,
    freeCourses,
    paidCourses,
    totalCategories,
  };

  return (
    <main className="space-y-10">

      {/* Welcome */}

      <section className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white shadow-xl">

        <h1 className="text-4xl font-bold">
          Welcome,
          <span className="ml-2">
            {session?.user?.name}
          </span>
          👋
        </h1>

        <p className="mt-4 max-w-2xl text-cyan-100">
          Manage your courses, update your content,
          and grow your online academy.
        </p>

      </section>

      {/* Stats */}

      <StatsCards stats={stats} />

      {/* Recent Courses */}

      <section className="space-y-8">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Recent Courses
            </h2>

            <p className="mt-2 text-slate-400">
              Latest published courses.
            </p>

          </div>

          <Link
            href="/dashboard/my-courses"
            className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            View All
          </Link>

        </div>

        {recentCourses.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-[#111827] py-20 text-center">

            <h2 className="text-3xl font-bold text-white">
              No Courses Yet
            </h2>

            <p className="mt-3 text-slate-400">
              Start by adding your first course.
            </p>

            <Link
              href="/dashboard/add-course"
              className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600"
            >
              Add Course
            </Link>

          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {recentCourses.map((course) => (
              <div
                key={course._id}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-56 w-full">

                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="space-y-4 p-6">

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white">
                      {course.category}
                    </span>

                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                      {course.level}
                    </span>

                  </div>

                  <h3 className="line-clamp-2 text-2xl font-bold text-white">
                    {course.title}
                  </h3>

                  <p className="text-slate-400">
                    Duration :
                    <span className="ml-2 text-white">
                      {course.duration}
                    </span>
                  </p>

                  <p className="text-slate-400">
                    Price :
                    <span className="ml-2 font-semibold text-cyan-400">
                      ${course.price}
                    </span>
                  </p>

                  <Link
                    href={`/courses/${course._id}`}
                    className="block rounded-xl bg-cyan-500 py-3 text-center font-semibold text-white transition hover:bg-cyan-600"
                  >
                    View Details
                  </Link>

                </div>

              </div>
            ))}

          </div>
        )}

      </section>

    </main>
  );
}