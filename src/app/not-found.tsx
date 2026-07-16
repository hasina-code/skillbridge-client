import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-[#081220]">

      <div className="max-w-xl text-center">

        <div className="mb-8 flex justify-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-500/20">

            <SearchX
              size={56}
              className="text-cyan-500"
            />

          </div>

        </div>

        <h1 className="text-8xl font-black text-cyan-500">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-500 dark:text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/"
            className="rounded-2xl bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            Back Home
          </Link>

          <Link
            href="/courses"
            className="rounded-2xl border border-cyan-500 px-8 py-3 font-semibold text-cyan-500 transition hover:bg-cyan-50 dark:hover:bg-cyan-500/10"
          >
            {/* Browse Courses */}
          </Link>

        </div>

      </div>

    </div>
  );
}