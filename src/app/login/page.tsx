"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, LogIn } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    try {
      const { error } = await authClient.signIn.email({
        email,
        password,
      });

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      alert("Login Successful!");

      router.push("/");
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  const handleDemoLogin = async () => {
    setLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email: "demo@gmail.com",
        password: "12345678",
      });

      if (error) {
        alert(error.message);
        setLoading(false);
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      console.error(err);
      alert("Demo Login Failed");
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-20 dark:bg-[#081220]">

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl dark:bg-[#0F172A]">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Welcome Back
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Login to continue learning with SkillBridge.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >

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

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-60"
          >
            <LogIn size={20} />

            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Demo Login */}

          <button
            type="button"
            onClick={handleDemoLogin}
            disabled={loading}
            className="h-14 w-full rounded-2xl border border-cyan-500 font-semibold text-cyan-500 transition hover:bg-cyan-500 hover:text-white"
          >
            Demo Login
          </button>

        </form>

        <p className="mt-8 text-center text-slate-500 dark:text-slate-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-cyan-500 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </main>
  );
}