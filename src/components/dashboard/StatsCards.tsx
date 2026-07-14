import {
  BookOpen,
  Users,
  DollarSign,
  CheckCircle,
} from "lucide-react";

type StatsProps = {
  stats: {
    totalCourses: number;
    totalStudents: number;
    revenue: number;
    completedCourses: number;
  };
};

export default function StatsCards({
  stats,
}: StatsProps) {
  const cards = [
    {
      title: "Total Courses",
      value: stats.totalCourses,
      icon: BookOpen,
      color:
        "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400",
    },
    {
      title: "Students",
      value: stats.totalStudents,
      icon: Users,
      color:
        "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
    },
    {
      title: "Revenue",
      value: `$${stats.revenue}`,
      icon: DollarSign,
      color:
        "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400",
    },
    {
      title: "Completed",
      value: stats.completedCourses,
      icon: CheckCircle,
      color:
        "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-[#111827]"
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