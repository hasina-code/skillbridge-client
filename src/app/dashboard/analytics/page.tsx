import { headers } from "next/headers";

import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
import AnalyticsBarChart from "@/components/dashboard/AnalyticsBarChart";
import AnalyticsPieChart from "@/components/dashboard/AnalyticsPieChart";
import AnalyticsRecentCourses from "@/components/dashboard/AnalyticsRecentCourses";

export type Course = {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  level: string;
  duration: string;
  price: number;
};

export default async function AnalyticsPage() {
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

  const categoryMap = new Map<string, number>();

  courses.forEach((course) => {
    categoryMap.set(
      course.category,
      (categoryMap.get(course.category) || 0) + 1
    );
  });

  const chartData = Array.from(categoryMap).map(
    ([category, total]) => ({
      category,
      total,
    })
  );

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Analytics
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Monitor your platform performance.
        </p>
      </div>

      <AnalyticsCards courses={courses} />

      <div className="grid gap-8 xl:grid-cols-2">

        <AnalyticsBarChart
          data={chartData}
        />

        <AnalyticsPieChart
          data={chartData}
        />

      </div>

      <AnalyticsRecentCourses
        courses={courses}
      />

    </div>
  );
}