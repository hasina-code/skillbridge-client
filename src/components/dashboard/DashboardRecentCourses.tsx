import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

type Course = {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  level: string;
  duration: string;
  price: number;
};

export default async function DashboardRecentCourses() {
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

  const recentCourses = courses.slice(0, 3);

  return (
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

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

  {recentCourses.map((course) => (
    <div
      key={course._id}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
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

        <div className="space-y-2 text-sm text-slate-400">

          <p>
            Duration :
            <span className="ml-2 text-white">
              {course.duration}
            </span>
          </p>

          <p>
            Price :
            <span className="ml-2 font-semibold text-cyan-400">
              ${course.price}
            </span>
          </p>

        </div>

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
    </section>
  );
}