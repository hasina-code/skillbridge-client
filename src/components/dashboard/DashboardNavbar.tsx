"use client";

import Link from "next/link";
import {
  Bell,
  CalendarDays,
  Menu,
  Search,
  Sparkles,
} from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { authClient } from "@/lib/auth-client";

type DashboardNavbarProps = {
  setOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

export default function DashboardNavbar({
  setOpen,
}: DashboardNavbarProps) {
  const { data: session } =
    authClient.useSession();

  const user = session?.user;

  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-lg dark:border-slate-800 dark:bg-[#0F172A]/95">
      <div className="flex h-20 items-center justify-between px-4 md:px-8">
        {/* Left */}

        <div className="flex items-center gap-6">
          {/* Mobile Menu */}

          <button
            onClick={() => setOpen(true)}
            className="rounded-xl p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
          >
            <Menu
              size={26}
              className="text-slate-900 dark:text-white"
            />
          </button>

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 shadow-lg shadow-cyan-500/30">
              <Sparkles className="absolute right-1 top-1 h-3 w-3 animate-pulse text-yellow-300" />

              <span className="text-2xl font-black text-white">
                S
              </span>
            </div>

            <div className="hidden sm:block">
              <h2 className="text-3xl font-extrabold leading-none">
                <span className="text-slate-900 dark:text-white">
                  Skill
                </span>

                <span className="text-cyan-500 dark:text-cyan-400">
                  Bridge
                </span>
              </h2>

              <p className="mt-1 text-[11px] uppercase tracking-[2px] text-slate-500 dark:text-slate-400">
                Learn • Build • Grow
              </p>
            </div>
          </Link>
        </div>

        {/* Search */}

        <div className="hidden w-full max-w-xl px-10 lg:block">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search courses..."
              className="h-12 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-5 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#081220] dark:text-white"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">
          {/* Date */}

          <div className="hidden items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 lg:flex dark:bg-[#081220]">
            <CalendarDays
              size={18}
              className="text-cyan-500"
            />

            <span className="text-sm text-slate-700 dark:text-slate-300">
              {today}
            </span>
          </div>

          {/* Theme */}

          <ThemeToggle />

          {/* Notification */}

          <button className="relative rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200 dark:bg-[#081220] dark:hover:bg-slate-800">
            <Bell
              size={21}
              className="text-slate-700 dark:text-white"
            />

            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#0F172A]" />
          </button>

          {/* User */}

          <button className="flex items-center gap-3 rounded-2xl bg-slate-100 p-2 pr-4 transition hover:bg-slate-200 dark:bg-[#081220] dark:hover:bg-slate-800">
            <img
              src={
                user?.image ||
                "https://ui-avatars.com/api/?name=User&background=06b6d4&color=fff"
              }
              alt={user?.name || "User"}
              className="h-11 w-11 rounded-full border-2 border-cyan-500 object-cover"
            />

            <div className="hidden text-left xl:block">
              <h4 className="font-semibold text-slate-900 dark:text-white">
                {user?.name || "Guest"}
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                {user?.email || ""}
              </p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}