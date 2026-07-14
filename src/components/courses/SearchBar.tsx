"use client";

import { Search, Sparkles } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mb-10">

      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 focus-within:border-cyan-500 focus-within:shadow-cyan-500/20 dark:border-slate-700 dark:bg-[#111827]">

        <div className="absolute inset-y-0 left-0 flex items-center pl-5">
          <Search
            size={22}
            className="text-cyan-500"
          />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder="Search by course title..."
          className="h-16 w-full bg-transparent pl-14 pr-16 text-lg text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
        />

        <div className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 p-2">
          <Sparkles
            size={18}
            className="text-cyan-500"
          />
        </div>

      </div>

    </div>
  );
}