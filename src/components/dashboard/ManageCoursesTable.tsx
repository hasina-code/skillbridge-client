"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import CourseRow from "./CourseRow";


export type Course = {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  level: string;
  duration: string;
  price: number;
};


type ManageCourseTableProps = {
  courses: Course[];
};


export default function ManageCourseTable({
  courses,
}: ManageCourseTableProps) {

  const [search, setSearch] = useState("");


  const filteredCourses = courses.filter((course) =>
    course.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (

    <div className="space-y-6">


      {/* Search */}

      <div className="relative w-full max-w-md">

        <Search
          size={18}
          className="
          absolute left-4 top-1/2 
          -translate-y-1/2 
          text-slate-400
          "
        />


        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}

          className="
          w-full rounded-2xl
          border border-slate-300
          dark:border-slate-700

          bg-white
          dark:bg-[#111827]

          py-3 pl-12 pr-4

          text-slate-900
          dark:text-white

          placeholder:text-slate-400

          outline-none

          transition

          focus:border-cyan-500
          "
        />

      </div>



      {/* Table Wrapper */}


      <div
      className="
      overflow-x-auto

      rounded-3xl

      border

      border-slate-200
      dark:border-slate-800

      bg-white
      dark:bg-[#111827]

      shadow-sm
      "
      >


        <table className="min-w-[800px] w-full">


          <thead
          className="
          border-b

          border-slate-200
          dark:border-slate-700

          bg-slate-100
          dark:bg-slate-900
          "
          >


            <tr>


              {
                [
                  "Thumbnail",
                  "Title",
                  "Category",
                  "Level",
                  "Price",
                  "Actions"
                ].map((item)=>(
                  
                  <th
                  key={item}

                  className="
                  px-6 py-4

                  text-left

                  text-sm

                  font-semibold

                  text-slate-600
                  dark:text-slate-300
                  "
                  >

                    {item}

                  </th>

                ))
              }


            </tr>


          </thead>




          <tbody>


          {
          filteredCourses.length === 0 ? (

            <tr>

              <td
              colSpan={6}
              className="
              py-12
              text-center

              text-slate-500
              dark:text-slate-400
              "
              >

                No courses found.

              </td>

            </tr>


          ) : (

            filteredCourses.map((course)=>(

              <CourseRow
              key={course._id}
              course={course}
              />

            ))

          )

          }



          </tbody>



        </table>



      </div>



    </div>

  );
}