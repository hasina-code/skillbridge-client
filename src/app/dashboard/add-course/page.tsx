import CourseForm from "@/components/dashboard/CourseForm";

export default function AddCoursePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Add New Course
        </h1>

        <p className="mt-2 text-slate-400">
          Create a new course for your students.
        </p>
      </div>

      {/* Course Form */}
      <CourseForm />
    </div>
  );
}