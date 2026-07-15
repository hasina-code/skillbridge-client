import {
  BookOpen,
  Users,
  DollarSign,
  FolderOpen,
} from "lucide-react";

type Course = {
  category: string;
  price: number;
};

type AnalyticsCardsProps = {
  courses: Course[];
};

export default function AnalyticsCards({
  courses,
}: AnalyticsCardsProps) {
  const totalCourses = courses.length;

  // Demo Students Count
  const totalStudents = totalCourses * 12;

  // Total Revenue
  const revenue = courses.reduce(
    (sum, course) => sum + Number(course.price),
    0
  );

  // Total Categories
  const totalCategories = new Set(
    courses.map((course) => course.category)
  ).size;

  const cards = [
    {
      title: "Total Courses",
      value: totalCourses,
      icon: BookOpen,
      color:
        "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400",
    },
    {
      title: "Students",
      value: totalStudents,
      icon: Users,
      color:
        "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
    },
    {
      title: "Revenue",
      value: `$${revenue}`,
      icon: DollarSign,
      color:
        "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    },
    {
      title: "Categories",
      value: totalCategories,
      icon: FolderOpen,
      color:
        "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-[#111827]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-500 dark:text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
                  {card.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.color}`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}