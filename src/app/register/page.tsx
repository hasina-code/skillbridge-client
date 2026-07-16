"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  User,
  Mail,
  Lock,
  Image as ImageIcon,
  UserPlus,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);


  const handleRegister = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const name = form.get("name") as string;

    const email = form.get("email") as string;

    const image = form.get("image") as string;

    const password = form.get("password") as string;

    const confirmPassword = form.get(
      "confirmPassword"
    ) as string;

    if (password.length < 6) {
      toast.error(
        "Password must be at least 6 characters."
      );

      setLoading(false);

      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");

      setLoading(false);

      return;
    }
try {
  const { error } = await authClient.signUp.email({
    name,
    email,
    password,
    image,
  });

  if (error) {
    toast.error(error.message ?? "Registration failed.");

    setLoading(false);
    return;
  }

  toast.success("Registration Successful!");

  router.push("/");
  router.refresh();
} catch (error) {
  console.error(error);

  if (error instanceof Error) {
    toast.error(error.message);
  } else {
    toast.error("Something went wrong.");
  }
} finally {
  setLoading(false);
}
}

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error(error);

      toast.error(
        "Google Login Failed."
      );
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-20 dark:bg-[#081220]">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl dark:bg-[#0F172A]">

        {/* Header */}

        <div className="text-center">

          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Create Account
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Join SkillBridge and start your learning journey.
          </p>

        </div>

        <form
          onSubmit={handleRegister}
          className="mt-10 space-y-6"
        >

          {/* Name */}

          <div>

            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <div className="relative">

              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="name"
                type="text"
                required
                placeholder="Enter your full name"
                className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-[#081220]"
              />

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="mb-2 block font-medium">
              Email
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-[#081220]"
              />

            </div>

          </div>

          {/* Profile Image */}

          <div>

            <label className="mb-2 block font-medium">
              Profile Image URL
            </label>

            <div className="relative">

              <ImageIcon
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="image"
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-[#081220]"
              />

            </div>

          </div>
                    {/* Password */}

          <div>

            <label className="mb-2 block font-medium">
              Password
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-[#081220]"
              />

            </div>

          </div>

          {/* Confirm Password */}

          <div>

            <label className="mb-2 block font-medium">
              Confirm Password
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                name="confirmPassword"
                type="password"
                required
                placeholder="Confirm your password"
                className="h-14 w-full rounded-2xl border border-slate-300 pl-12 pr-4 outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-[#081220]"
              />

            </div>

          </div>

          {/* Register Button */}

          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
          >

            <UserPlus size={20} />

            {loading
              ? "Creating Account..."
              : "Create Account"}

          </button>

        </form>

        {/* Divider */}

        <div className="my-6 flex items-center">

          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />

          <span className="mx-4 text-sm text-slate-500">
            OR
          </span>

          <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />

        </div>

        {/* Google Login */}

        {/* <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-[#081220] dark:text-white dark:hover:bg-slate-900"
        >

          <FcGoogle size={20} />

          Continue with Google

        </button> */}

        {/* Footer */}

        <p className="mt-8 text-center text-slate-500 dark:text-slate-400">

          Already have an account?{" "}

          <Link
            href="/login"
            className="font-semibold text-cyan-500 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </main>
  );
}