import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 dark:bg-[#081220]">
      <div className="max-w-lg text-center">

        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/20">
          <SearchX
            size={48}
            className="text-cyan-500"
          />
        </div>

        {/* Title */}
        <h1 className="mt-8 text-5xl font-bold text-slate-900 dark:text-white">
          Course Not Found
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Sorry, the course you're looking for doesn't exist or may have
          been removed. Please browse our available courses instead.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            <ArrowLeft size={18} />
            Back to Courses
          </Link>

          <Link
            href="/"
            className="rounded-2xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-500 transition hover:bg-cyan-500 hover:text-white"
          >
            Go Home
          </Link>

        </div>

      </div>
    </main>
  );
}