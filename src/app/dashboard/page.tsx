import StatsCards from "@/components/dashboard/StatsCards";

async function getStats() {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_APP_URL ||
      "http://localhost:3000"
    }/api/dashboard/stats`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(
      "Failed to fetch dashboard stats"
    );
  }

  return res.json();
}

export default async function DashboardPage() {
  const stats = await getStats();

  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Dashboard Overview
        </h1>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Welcome back! Here's what's happening
          in your SkillBridge platform.
        </p>
      </div>

      {/* Stats */}

      <StatsCards stats={stats} />

      {/* Content */}

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Analytics */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-[#111827]">

          <h2 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
            Analytics
          </h2>

          <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 text-slate-500 dark:border-slate-700 dark:text-slate-400">
            📊 Recharts Analytics Coming Soon
          </div>

        </div>

        {/* Recent Courses */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-[#111827]">

          <h2 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
            Recent Courses
          </h2>

          <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 text-slate-500 dark:border-slate-700 dark:text-slate-400">
            📚 Recent Courses List Coming Soon
          </div>

        </div>

      </div>
    </div>
  );
}