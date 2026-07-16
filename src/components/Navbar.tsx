"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  Sparkles,
  LayoutDashboard,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { authClient } from "@/lib/auth-client";

const publicLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const privateLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "My Courses", href: "/dashboard/my-courses" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const navLinks = session ? privateLinks : publicLinks;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#081220]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 shadow-lg">

            <Sparkles className="absolute right-1 top-1 h-3 w-3 animate-pulse text-yellow-300" />

            <span className="text-2xl font-black text-white">
              S
            </span>

          </div>

          <div>

            <h1 className="text-3xl font-black text-white">
              Skill
              <span className="text-cyan-400">
                Bridge
              </span>
            </h1>

            <p className="text-[10px] uppercase tracking-[4px] text-slate-400">
              Learn • Build • Grow
            </p>

          </div>

        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 lg:flex">

          <nav className="flex items-center gap-8">

            {navLinks.map((link) => (

              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </Link>

            ))}

          </nav>

          <ThemeToggle />
                    {/* Auth Section */}

          {!session ? (
            <>
              <Link
                href="/login"
                className="font-semibold text-white transition hover:text-cyan-400"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-2xl border border-cyan-500 bg-[#0B2334] px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="relative">

              {/* Avatar */}

              <button
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <Image
                  src={
                    session.user.image ||
                    "/default-avatar.png"
                  }
                  alt={session.user.name || "User"}
                  width={44}
                  height={44}
                  className="rounded-full border-2 border-cyan-500 object-cover"
                />
              </button>

              {/* Dropdown */}

              {profileOpen && (
                <div className="absolute right-0 mt-4 w-72 overflow-hidden rounded-3xl border border-slate-700 bg-[#0F172A] shadow-2xl">

                  {/* User Info */}

                  <div className="border-b border-slate-700 p-5">

                    <Image
                      src={
                        session.user.image ||
                        "/default-avatar.png"
                      }
                      alt={session.user.name || "User"}
                      width={70}
                      height={70}
                      className="mx-auto rounded-full border-2 border-cyan-500 object-cover"
                    />

                    <h3 className="mt-4 text-center text-lg font-bold text-white">
                      {session.user.name}
                    </h3>

                    <p className="text-center text-sm text-slate-400">
                      {session.user.email}
                    </p>

                  </div>

                  {/* Menu */}

                  <div className="p-3">

                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
                    >
                      <LayoutDashboard size={18} />
                      Dashboard
                    </Link>

                    <Link
                      href="/dashboard/profile"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
                    >
                      <User size={18} />
                      Profile
                    </Link>

                    <Link
                      href="/dashboard/settings"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800"
                    >
                      <Settings size={18} />
                      Settings
                    </Link>
                                        {/* Logout */}

                    <button
                      onClick={async () => {
                        await authClient.signOut();
                        setProfileOpen(false);
                        window.location.reload();
                      }}
                      className="mt-3 flex w-full items-center gap-3 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>

                  </div>

                </div>
              )}

            </div>
          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-slate-800 bg-[#081220] lg:hidden">

          <div className="flex flex-col space-y-5 p-6">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}

            <ThemeToggle />

            {!session ? (
              <>
                <Link
                  href="/login"
                  className="font-semibold text-white"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-xl bg-cyan-500 px-5 py-3 text-center font-semibold text-white"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="text-slate-300"
                >
                  Dashboard
                </Link>

                <Link
                  href="/dashboard/profile"
                  className="text-slate-300"
                >
                  Profile
                </Link>

                <button
                  onClick={async () => {
                    await authClient.signOut();
                    window.location.reload();
                  }}
                  className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>
      )}

    </header>
  );
}