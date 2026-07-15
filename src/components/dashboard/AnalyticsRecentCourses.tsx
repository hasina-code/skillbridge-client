import Image from "next/image";
import Link from "next/link";

type Course = {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  level: string;
  duration: string;
  price: number;
};

type AnalyticsRecentCoursesProps = {
  courses: Course[];
};

export default function AnalyticsRecentCourses({
  courses,
}: AnalyticsRecentCoursesProps) {
  const recentCourses = courses.slice(0, 5);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#111827]">

      {/* Header */}

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Recent Courses
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Recently published courses.
          </p>

        </div>

        <Link
          href="/dashboard/manage-courses"
          className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-cyan-600"
        >
          View All
        </Link>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead>

            <tr className="border-b border-slate-200 dark:border-slate-700">

              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Course
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Category
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Level
              </th>

              <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">
                Price
              </th>

            </tr>

          </thead>

          <tbody>

            {recentCourses.map((course) => (
              <tr
                key={course._id}
                className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900"
              >
                {/* Course */}

                <td className="px-4 py-4">

                  <div className="flex items-center gap-4">

                    <div className="relative h-14 w-20 overflow-hidden rounded-xl">

                      <Image
                        src={course.thumbnail}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {course.title}
                      </h3>

                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {course.duration}
                      </p>

                    </div>

                  </div>

                </td>

                {/* Category */}

                <td className="px-4 py-4">

                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
                    {course.category}
                  </span>

                </td>

                {/* Level */}

                <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                  {course.level}
                </td>

                {/* Price */}

                <td className="px-4 py-4 font-semibold text-green-600 dark:text-green-400">
                  ${course.price}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}