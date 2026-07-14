import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ayesha Rahman",
    rating: 5,
    comment:
      "Excellent course! The instructor explained every topic clearly with practical examples.",
  },
  {
    id: 2,
    name: "Mahmud Hasan",
    rating: 4,
    comment:
      "Very informative and beginner-friendly. I learned a lot from the projects.",
  },
  {
    id: 3,
    name: "Sarah Khan",
    rating: 5,
    comment:
      "One of the best online courses I've taken. Highly recommended!",
  },
];

export default function Reviews() {
  return (
    <section className="mt-24">
      <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">
        Student Reviews
      </h2>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#0F172A]"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {review.name}
              </h3>

              <div className="flex">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}