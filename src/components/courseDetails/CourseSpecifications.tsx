import {
  BookOpen,
  Clock3,
  Users,
  Star,
  BadgeDollarSign,
  Award,
} from "lucide-react";

interface Props {
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  price: number;
}

export default function CourseSpecifications({
  duration,
  lessons,
  students,
  rating,
  price,
}: Props) {
  const specifications = [
    {
      icon: <Clock3 className="text-cyan-500" />,
      label: "Duration",
      value: duration,
    },
    {
      icon: <BookOpen className="text-cyan-500" />,
      label: "Lessons",
      value: `${lessons} Lessons`,
    },
    {
      icon: <Users className="text-cyan-500" />,
      label: "Students",
      value: `${students}+`,
    },
    {
      icon: <Star className="text-yellow-500 fill-yellow-500" />,
      label: "Rating",
      value: rating,
    },
    {
      icon: <BadgeDollarSign className="text-green-500" />,
      label: "Price",
      value: `$${price}`,
    },
    {
      icon: <Award className="text-purple-500" />,
      label: "Certificate",
      value: "Included",
    },
  ];

  return (
    <section className="mt-24">
      <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">
        Course Specifications
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {specifications.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#0F172A]"
          >
            <div className="mb-4">{item.icon}</div>

            <p className="text-sm text-slate-500">
              {item.label}
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}