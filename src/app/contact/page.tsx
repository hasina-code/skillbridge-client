"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white py-20 dark:bg-[#081220]">

      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}

        <section className="mb-20 text-center">

          <span className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white">
            Contact SkillBridge
          </span>

          <h1 className="mt-6 text-5xl font-extrabold text-slate-900 dark:text-white">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Whether you have questions about courses, instructors,
            enrollment or your learning journey, our team is here
            to help you anytime.
          </p>

        </section>

        {/* Content */}

        <section className="grid gap-14 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Contact Information
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Reach out through any of the following channels.
              We'll respond as quickly as possible.
            </p>

            <div className="mt-10 space-y-6">

              {/* Email */}

              <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-[#111827]">

                <div className="rounded-2xl bg-cyan-500 p-4 text-white">
                  <Mail size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Email
                  </h3>

                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    support@skillbridge.com
                  </p>
                </div>

              </div>

              {/* Phone */}

              <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-[#111827]">

                <div className="rounded-2xl bg-cyan-500 p-4 text-white">
                  <Phone size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Phone
                  </h3>

                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    +880 18xx-xxxxxx
                  </p>
                </div>

              </div>

              {/* Address */}

              <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-[#111827]">

                <div className="rounded-2xl bg-cyan-500 p-4 text-white">
                  <MapPin size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Address
                  </h3>

                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    Dhaka, Bangladesh
                  </p>
                </div>

              </div>
                            {/* Business Hours */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-[#111827]">

                <div className="mb-5 flex items-center gap-3">

                  <div className="rounded-xl bg-cyan-500 p-3 text-white">
                    <Clock size={22} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Business Hours
                  </h3>

                </div>

                <div className="space-y-3 text-slate-600 dark:text-slate-300">

                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-[#111827]">

              <div className="mb-8 flex items-center gap-3">

                <div className="rounded-xl bg-cyan-500 p-3 text-white">
                  <MessageCircle size={22} />
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Send Us a Message
                  </h2>

                  <p className="text-slate-500 dark:text-slate-400">
                    Fill out the form and we'll get back to you soon.
                  </p>

                </div>

              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div className="grid gap-6 md:grid-cols-2">

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                    className="rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
                  />

                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
                />

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#0F172A] dark:text-white"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}

                  <Send size={20} />
                </button>

              </form>

            </div>

          </div>

        </section>
              {/* FAQ */}

      <section className="mt-24">

        <div className="text-center">

          <span className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Here are some of the most common questions our learners ask.
          </p>

        </div>

        <div className="mt-12 space-y-6">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-[#111827]">

            <div className="flex items-center gap-3">

              <HelpCircle
                className="text-cyan-500"
                size={24}
              />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                How can I enroll in a course?
              </h3>

            </div>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Simply browse our courses, open the course details page,
              and click the <strong>Enroll Now</strong> button.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-[#111827]">

            <div className="flex items-center gap-3">

              <HelpCircle
                className="text-cyan-500"
                size={24}
              />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Do I receive a certificate?
              </h3>

            </div>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Yes. After successfully completing a course,
              you will receive a digital certificate.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-[#111827]">

            <div className="flex items-center gap-3">

              <HelpCircle
                className="text-cyan-500"
                size={24}
              />

              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Can I access courses from mobile?
              </h3>

            </div>

            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              Absolutely. SkillBridge is fully responsive and works
              perfectly on desktop, tablet and mobile devices.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="mt-24">

        <div className="rounded-[40px] bg-cyan-500 px-10 py-16 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready to Start Learning?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-cyan-100">
            Explore our professional courses and start building
            the skills that will shape your future.
          </p>

          <Link
            href="/courses"
            className="mt-10 inline-flex items-center rounded-2xl bg-white px-8 py-4 text-lg font-bold text-cyan-600 transition hover:scale-105"
          >
            Explore Courses
          </Link>

        </div>

      </section>

      </div>

    </main>
  );
}