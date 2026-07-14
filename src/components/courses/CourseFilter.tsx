"use client";

import { useEffect, useRef, useState } from "react";
import {
  Filter,
  BookOpen,
  GraduationCap,
  ArrowUpDown,
  ChevronDown,
  Check,
} from "lucide-react";

type FilterBarProps = {
  category: string;
  setCategory: (value: string) => void;

  level: string;
  setLevel: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;
};

const categories = [
  "All",
  "Web Development",
  "Frontend",
  "Backend",
  "Full Stack",
  "Programming",
  "UI/UX Design",
  "Data Science",
  "AI",
];

const levels = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

const sorts = [
  "",
  "low",
  "high",
];

const sortLabel = (value: string) => {
  if (value === "") return "Default";
  if (value === "low") return "Price: Low → High";
  if (value === "high") return "Price: High → Low";
  return value;
};

function CustomSelect({
  label,
  icon,
  value,
  options,
  onChange,
  formatter,
}: {
  label: string;
  icon: React.ReactNode;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  formatter?: (v: string) => string;
}) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handle);

    return () =>
      document.removeEventListener(
        "mousedown",
        handle
      );
  }, []);

  return (
    <div
      className="relative"
      ref={ref}
    >
      <label className="mb-3 flex items-center gap-2 font-semibold text-slate-700 dark:text-slate-300">
        {icon}
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-14 w-full items-center justify-between rounded-2xl border border-slate-300 bg-slate-50 px-5 text-left text-slate-900 transition hover:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
      >
        <span>
          {formatter
            ? formatter(value)
            : value === "All"
            ? `All ${label}s`
            : value}
        </span>

        <ChevronDown
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
          size={18}
        />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-[#111827]">
          {options.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                onChange(item);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between px-5 py-3 text-left transition hover:bg-cyan-500 hover:text-white

                ${
                  item === value
                    ? "bg-cyan-500 text-white"
                    : "text-slate-800 dark:text-slate-200"
                }`}
            >
              <span>
                {formatter
                  ? formatter(item)
                  : item === "All"
                  ? `All ${label}s`
                  : item}
              </span>

              {item === value && (
                <Check size={16} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FilterBar({
  category,
  setCategory,
  level,
  setLevel,
  sort,
  setSort,
}: FilterBarProps) {
  return (
    <div className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-[#111827]">
      <div className="mb-8 flex items-center gap-4">
        <div className="rounded-2xl bg-cyan-500 p-3 text-white">
          <Filter size={22} />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Filter Courses
          </h3>

          <p className="text-slate-500">
            Find the perfect course easily.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <CustomSelect
          label="Category"
          value={category}
          onChange={setCategory}
          options={categories}
          icon={
            <BookOpen
              size={18}
              className="text-cyan-500"
            />
          }
        />

        <CustomSelect
          label="Level"
          value={level}
          onChange={setLevel}
          options={levels}
          icon={
            <GraduationCap
              size={18}
              className="text-cyan-500"
            />
          }
        />

        <CustomSelect
          label="Sort"
          value={sort}
          onChange={setSort}
          options={sorts}
          formatter={sortLabel}
          icon={
            <ArrowUpDown
              size={18}
              className="text-cyan-500"
            />
          }
        />
      </div>
    </div>
  );
}