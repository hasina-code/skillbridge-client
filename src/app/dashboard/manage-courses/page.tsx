import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import ManageCourseTable from "@/components/dashboard/ManageCoursesTable";


export type Course = {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  level: string;
  duration: string;
  price: number;
  instructorEmail: string;
};

export default async function ManageCoursesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const headersList = await headers();

  const host = headersList.get("host");

  const protocol =
    process.env.NODE_ENV === "development"
      ? "http"
      : "https";

  const res = await fetch(
    `${protocol}://${host}/api/courses`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch courses.");
  }

  const courses: Course[] = await res.json();

  const myCourses = courses.filter(
    (course) =>
      course.instructorEmail === session.user.email
  );

 return (

<div

className="
space-y-8

px-4
sm:px-6
lg:px-8

"

>


<div>


<h1

className="
text-2xl
sm:text-3xl
lg:text-4xl

font-bold

text-slate-900
dark:text-white

"

>

Manage Courses

</h1>



<p

className="
mt-2

text-sm
sm:text-base

text-slate-600
dark:text-slate-400

"

>

View, edit and delete your courses.

</p>


</div>



<ManageCourseTable
courses={myCourses}
/>



</div>

);
}