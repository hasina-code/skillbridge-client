"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeSettings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Theme Mode
        </h3>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Choose how SkillBridge looks on your device.
        </p>
      </div>

      <div className="flex overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">

        {/* Light */}

        <button
          onClick={() => setTheme("light")}
          className={`flex items-center gap-2 px-6 py-3 transition ${
            theme === "light"
              ? "bg-cyan-500 text-white"
              : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-[#111827] dark:text-slate-300 dark:hover:bg-slate-800"
          }`}
        >
          <Sun size={18} />

          <span>Light</span>
        </button>

        {/* Dark */}

        <button
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-2 px-6 py-3 transition ${
            theme === "dark"
              ? "bg-cyan-500 text-white"
              : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-[#111827] dark:text-slate-300 dark:hover:bg-slate-800"
          }`}
        >
          <Moon size={18} />

          <span>Dark</span>
        </button>

      </div>

    </div>
  );
}