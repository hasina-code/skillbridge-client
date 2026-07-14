export default function Loading() {
  return (
    <main className="min-h-screen bg-white py-20 dark:bg-[#081220]">
      <div className="mx-auto max-w-7xl px-6 animate-pulse">

        {/* Back Button */}
        <div className="mb-10 h-12 w-44 rounded-xl bg-slate-200 dark:bg-slate-700" />

        {/* Hero */}
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Image Skeleton */}
          <div className="h-[420px] rounded-3xl bg-slate-200 dark:bg-slate-700" />

          {/* Content Skeleton */}
          <div>

            <div className="h-8 w-36 rounded-full bg-slate-200 dark:bg-slate-700" />

            <div className="mt-6 h-12 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />

            <div className="mt-6 space-y-3">
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
              <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
            </div>

            <div className="mt-8 h-6 w-48 rounded bg-slate-200 dark:bg-slate-700" />

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-10 rounded bg-slate-200 dark:bg-slate-700"
                />
              ))}
            </div>

            {/* Price + Button */}
            <div className="mt-12 flex items-center justify-between">
              <div className="h-12 w-32 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="h-14 w-40 rounded-2xl bg-slate-200 dark:bg-slate-700" />
            </div>

          </div>

        </div>

        {/* Overview */}
        <div className="mt-24 rounded-3xl border border-slate-200 p-10 dark:border-slate-700">

          <div className="h-10 w-64 rounded bg-slate-200 dark:bg-slate-700" />

          <div className="mt-8 space-y-4">
            <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
          </div>

        </div>

      </div>
    </main>
  );
}