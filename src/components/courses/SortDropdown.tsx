"use client";

import { ArrowUpDown } from "lucide-react";

interface SortDropdownProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const sortOptions = [
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Oldest",
    value: "oldest",
  },
  {
    label: "Price: Low to High",
    value: "price-low",
  },
  {
    label: "Price: High to Low",
    value: "price-high",
  },
  {
    label: "Highest Rating",
    value: "rating",
  },
];

export default function SortDropdown({
  sortBy,
  setSortBy,
}: SortDropdownProps) {
  return (
    <div className="relative w-full lg:w-72">

      {/* Icon */}
      <ArrowUpDown
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      {/* Select */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-11 pr-4 text-gray-800 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
      >
        {sortOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

    </div>
  );
}