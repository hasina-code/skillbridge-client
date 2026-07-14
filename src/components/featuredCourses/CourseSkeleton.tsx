export default function CourseSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-[#111827]">

      <div className="h-56 bg-slate-300 dark:bg-slate-700" />

      <div className="space-y-4 p-6">

        <div className="h-6 w-3/4 rounded bg-slate-300 dark:bg-slate-700" />

        <div className="h-4 w-full rounded bg-slate-300 dark:bg-slate-700" />

        <div className="h-4 w-5/6 rounded bg-slate-300 dark:bg-slate-700" />

        <div className="mt-6 flex justify-between">

          <div className="h-8 w-24 rounded bg-slate-300 dark:bg-slate-700" />

          <div className="h-10 w-28 rounded bg-slate-300 dark:bg-slate-700" />

        </div>

      </div>

    </div>
  );
}