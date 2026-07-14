import Image from "next/image";
import {
  GraduationCap,
  Users,
  Target,
  Rocket,
  Award,
  Globe,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#081220]">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-slate-50 py-20 dark:border-slate-800 dark:bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white">
            About SkillBridge
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-900 dark:text-white">
            Learn. Build. Grow.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            SkillBridge is a modern online learning platform that helps
            students, developers, freelancers, and professionals master
            high-demand skills through project-based courses taught by
            experienced instructors.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div className="relative h-[420px] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students learning"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Our Story
            </h2>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
              SkillBridge was created with one simple mission: to bridge the
              gap between learning and real-world careers. We believe every
              learner deserves access to practical, industry-focused education
              that leads to meaningful opportunities.
            </p>

            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Our platform combines expert instructors, hands-on projects, and
              modern technologies to help learners become job-ready and
              confident in today's competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-slate-50 py-24 dark:bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-[#111827]">
              <Target className="mb-5 text-cyan-500" size={48} />

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                To provide affordable, practical, and career-focused education
                that empowers learners with real-world technical skills.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-[#111827]">
              <Rocket className="mb-5 text-cyan-500" size={48} />

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                To become one of the leading online learning platforms by
                helping millions of learners build successful careers through
                technology education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Why Choose SkillBridge?
            </h2>

            <p className="mt-5 text-slate-600 dark:text-slate-300">
              Everything you need to become industry ready.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: BookOpen,
                title: "Project-Based Learning",
                desc: "Build practical projects while learning.",
              },
              {
                icon: Award,
                title: "Expert Instructors",
                desc: "Learn from experienced professionals.",
              },
              {
                icon: Globe,
                title: "Learn Anywhere",
                desc: "Access courses from any device.",
              },
              {
                icon: Users,
                title: "Growing Community",
                desc: "Connect with thousands of learners.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-[#111827]"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-cyan-500 p-4 text-white">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-slate-50 py-24 dark:bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                number: "50+",
                title: "Professional Courses",
              },
              {
                number: "10K+",
                title: "Students",
              },
              {
                number: "30+",
                title: "Expert Mentors",
              },
              {
                number: "95%",
                title: "Student Satisfaction",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-10 text-center shadow-lg dark:bg-[#111827]"
              >
                <h2 className="text-5xl font-extrabold text-cyan-500">
                  {item.number}
                </h2>

                <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-300">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-4xl font-bold text-slate-900 dark:text-white">
            Our Core Values
          </h2>

          <div className="mt-14 space-y-6">
            {[
              "Quality education for everyone",
              "Continuous innovation",
              "Practical skill development",
              "Student success comes first",
              "Honesty, transparency and trust",
            ].map((value) => (
              <div
                key={value}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-[#111827]"
              >
                <CheckCircle
                  className="text-cyan-500"
                  size={26}
                />

                <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl rounded-[40px] bg-cyan-500 px-10 py-16 text-center text-white">
          <GraduationCap
            className="mx-auto mb-6"
            size={60}
          />

          <h2 className="text-4xl font-bold">
            Ready to Start Learning?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-cyan-100">
            Join thousands of learners and start building your future with
            industry-ready skills.
          </p>

       <Link
        href="/courses"
        className="mt-10 inline-block rounded-2xl bg-white px-8 py-4 text-lg font-bold text-cyan-600 transition hover:scale-105"
       >
      Explore Courses
      </Link>
        </div>
      </section>
    </main>
  );
}