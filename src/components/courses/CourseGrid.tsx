"use client";

import CourseCard from "@/components/CourseCard";
import EmptyState from "./EmptyState";
import CourseSkeleton from "../featuredCourses/CourseSkeleton";

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

  rating?: number;
  students?: number;
  lessons?: number;
}

interface CourseGridProps {
  courses: Course[];
  loading: boolean;
}

export default function CourseGrid({
  courses,
  loading,
}: CourseGridProps) {
  if (loading) {
    return (
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <CourseSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (courses.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courses.map((course) => (
        <CourseCard
          key={course._id}
          course={{
            _id: course._id,

            title: course.title,
            thumbnail: course.thumbnail,

            description: course.shortDescription,
            shortDescription: course.shortDescription,

            category: course.category,
            level: course.level,
            duration: course.duration,
            price: course.price,

            instructorName: course.instructorName,
            instructorEmail: course.instructorEmail,

            rating: course.rating ?? 4.8,
            students: course.students ?? 1250,
            lessons: course.lessons ?? 24,
          }}
        />
      ))}
    </div>
  );
}