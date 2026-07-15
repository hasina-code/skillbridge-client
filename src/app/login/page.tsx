"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, LogIn } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Email Login
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
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
    
        toast.error((error as any).message || "Login failed");
        return;
      }

      toast.success("Login Successful!");
      router.push("/");
      router.refresh();
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Demo Login
  const handleDemoLogin = async () => {
    setLoading(true);

    try {
      const { error } = await authClient.signIn.email({
        email: "demo@gmail.com",
        password: "12345678",
      });

      if (error) {
       
        toast.error((error as any).message || "Demo login failed");
        return;
      }

      toast.success("Demo Login Successful!");
      router.push("/");
      router.refresh();
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Demo Login Failed!");
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error: any) {
      console.error(error);
      toast.error(error?.message || "Google Login Failed!");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10 dark:bg-[#081220]">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl dark:bg-[#0F172A] sm:p-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Welcome Back
          </h1>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Login to continue learning with SkillBridge.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
              Email
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#081220] dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
              Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="h-14 w-full rounded-2xl border border-slate-300 bg-white pl-12 pr-4 text-slate-900 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-[#081220] dark:text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <LogIn size={20} />
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300 dark:border-slate-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-slate-500 dark:bg-[#0F172A] dark:text-slate-400">
              OR
            </span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-[#081220] dark:text-white dark:hover:bg-slate-800"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <button
          onClick={handleDemoLogin}
          disabled={loading}
          className="mt-4 h-14 w-full rounded-2xl border border-cyan-500 font-semibold text-cyan-500 transition hover:bg-cyan-500 hover:text-white disabled:opacity-60"
        >
          Demo Login
        </button>

        <p className="mt-8 text-center text-slate-500 dark:text-slate-400">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold text-cyan-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}