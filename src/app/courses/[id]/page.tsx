import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  BookOpen,
  Clock3,
  Star,
  Users,
} from "lucide-react";

import CourseCard, {
  Course,
} from "@/components/CourseCard";

import Reviews from "@/components/courseDetails/Reviews";
import CourseSpecifications from "@/components/courseDetails/CourseSpecifications";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CourseDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  const headersList = await headers();

  const protocol =
    process.env.NODE_ENV === "development"
      ? "http"
      : "https";

  const host = headersList.get("host");

  if (!host) {
    notFound();
  }

  // Fetch Single Course

  const courseResponse = await fetch(
    `${protocol}://${host}/api/courses/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!courseResponse.ok) {
    notFound();
  }

  const course: Course =
    await courseResponse.json();

  // Fetch All Courses

  const coursesResponse = await fetch(
    `${protocol}://${host}/api/courses`,
    {
      cache: "no-store",
    }
  );

  const allCourses: Course[] =
    coursesResponse.ok
      ? await coursesResponse.json()
      : [];

  const relatedCourses = allCourses
    .filter(
      (item) =>
        item.category === course.category &&
        item._id !== course._id
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-50 py-20 dark:bg-[#081220]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Back */}

        <Link
          href="/courses"
          className="mb-10 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          <ArrowLeft size={18} />
          Back to Courses
        </Link>

        {/* Hero */}

        <section className="grid items-center gap-16 lg:grid-cols-2">

          {/* Thumbnail */}

          <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-xl">

            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              priority
              className="object-cover"
            />

          </div>

          {/* Content */}

          <div>

            <div className="mb-5 flex flex-wrap items-center gap-3">

              <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white">
                {course.category}
              </span>

              <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {course.level}
              </span>

            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
              {course.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {course.description}
            </p>

            <div className="mt-8">

              <h3 className="font-semibold text-cyan-600">
                Instructor
              </h3>

              <p className="mt-1 text-lg font-medium text-slate-800 dark:text-white">
                {course.instructorName}
              </p>

              <p className="text-slate-500">
                {course.instructorEmail}
              </p>

            </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-2 gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

              <div className="flex items-center gap-3">
                <Star
                  className="fill-yellow-400 text-yellow-400"
                  size={20}
                />
                <span>
                  {course.rating ?? 4.8} Rating
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Users size={20} />
                <span>
                  {course.students ?? 1200} Students
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 size={20} />
                <span>{course.duration}</span>
              </div>

              <div className="flex items-center gap-3">
                <BookOpen size={20} />
                <span>
                  {course.lessons ?? 30} Lessons
                </span>
              </div>

            </div>

            {/* Price */}

            <div className="mt-10 flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Course Fee
                </p>

                <h2 className="mt-1 text-5xl font-black text-cyan-600">
                  ${course.price}
                </h2>

              </div>

              <button className="rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-cyan-600">
                Enroll Now
              </button>

            </div>

          </div>

        </section>
                {/* Course Overview */}

        <section className="mt-24 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-700 dark:bg-[#111827]">

          <div className="mb-10">

            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Course Overview
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {course.description}
            </p>

          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Learning */}

            <div className="rounded-3xl bg-cyan-50 p-8 dark:bg-cyan-900/10">

              <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                What You'll Learn
              </h3>

              <ul className="space-y-4">

                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500">✓</span>
                  <span>Build real-world projects using modern technologies.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500">✓</span>
                  <span>Understand professional development workflow.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500">✓</span>
                  <span>Write clean, reusable and scalable code.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500">✓</span>
                  <span>Master industry best practices.</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 text-cyan-500">✓</span>
                  <span>Become confident for real client projects.</span>
                </li>

              </ul>

            </div>

            {/* Requirements */}

            <div className="rounded-3xl bg-slate-100 p-8 dark:bg-[#0F172A]">

              <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Requirements
              </h3>

              <ul className="space-y-4">

                <li>• Basic Computer Knowledge</li>

                <li>• Laptop / Desktop</li>

                <li>• Internet Connection</li>

                <li>• Passion for Learning</li>

                <li>• No Prior Experience Required</li>

              </ul>

            </div>

          </div>

        </section>

        {/* Course Specifications */}

        <section className="mt-20">

          <CourseSpecifications
            duration={course.duration}
            lessons={course.lessons ?? 30}
            students={course.students ?? 1200}
            rating={course.rating ?? 4.8}
            price={course.price}
          />

        </section>

        {/* Student Reviews */}

        <section className="mt-20">

          <Reviews />

        </section>
                {/* Related Courses */}

        {relatedCourses.length > 0 && (
          <section className="mt-24">

            <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">

              <div>

                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                  Related Courses
                </h2>

                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Continue learning with more courses from this category.
                </p>

              </div>

              <Link
                href="/courses"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
              >
                View All Courses
              </Link>

            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

              {relatedCourses.map((relatedCourse) => (

                <CourseCard
                  key={relatedCourse._id}
                  course={{
                    ...relatedCourse,
                    rating: relatedCourse.rating ?? 4.8,
                    students: relatedCourse.students ?? 1200,
                    lessons: relatedCourse.lessons ?? 30,
                  }}
                />

              ))}

            </div>

          </section>
        )}

      </div>
    </main>
  );
}