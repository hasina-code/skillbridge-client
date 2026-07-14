import ManageCoursesTable from "@/components/dashboard/ManageCoursesTable";

async function getCourses() {
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
    throw new Error("Failed to fetch courses");
  }

  return res.json();
}

export default async function ManageCoursesPage() {
  const courses = await getCourses();

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Manage Courses
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            View, edit and manage all your published courses.
          </p>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#111827]">

        <ManageCoursesTable
          courses={courses}
        />

      </div>

    </div>
  );
}