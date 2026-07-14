"use client";

import { useEffect, useMemo, useState } from "react";

import CourseGrid from "@/components/courses/CourseGrid";
import SearchBar from "@/components/courses/SearchBar";
import CourseFilter from "@/components/courses/CourseFilter";
import Pagination from "@/components/courses/Pagination";

export interface Course {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  thumbnail: string;
  instructorName: string;
  instructorEmail: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [sort, setSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 8;

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch("/api/courses");

        const data = await res.json();

        setCourses(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);
    const filteredCourses = useMemo(() => {
    let filtered = [...courses];

    // Search
    if (search) {
      filtered = filtered.filter(
        (course) =>
          course.title
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          course.shortDescription
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    // Category Filter
    if (category !== "All") {
      filtered = filtered.filter(
        (course) => course.category === category
      );
    }

    // Level Filter
    if (level !== "All") {
      filtered = filtered.filter(
        (course) => course.level === level
      );
    }

    // Sort
    if (sort === "low") {
      filtered.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [courses, search, category, level, sort]);

  const totalPages = Math.ceil(
    filteredCourses.length / coursesPerPage
  );

  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <main className="min-h-screen bg-slate-50 py-16 dark:bg-[#081220]">

      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}

        <div className="mb-12 text-center">

          <h1 className="text-5xl font-bold text-slate-900 dark:text-white">
            Explore Courses
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Discover professional courses from expert instructors.
          </p>

        </div>

        {/* Search */}

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        {/* Filters */}

        <CourseFilter
          category={category}
          setCategory={setCategory}
          level={level}
          setLevel={setLevel}
          sort={sort}
          setSort={setSort}
        />
                {/* Course Grid */}

        <CourseGrid
          courses={currentCourses}
          loading={loading}
        />

        {/* Empty State */}

        {!loading &&
          currentCourses.length === 0 && (
            <div className="mt-16 rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center dark:border-slate-700 dark:bg-[#111827]">

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                No Courses Found
              </h3>

              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Try changing your search or filters.
              </p>

            </div>
          )}

        {/* Pagination */}

        {!loading &&
          totalPages > 1 && (
            <div className="mt-14 flex justify-center">

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />

            </div>
          )}

      </div>

    </main>
  );
}