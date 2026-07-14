"use client";

import Link from "next/link";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { quickLinks, supportLinks } from "./footerData";

export default function Footer() {
  return (
    <footer className="bg-[#081220] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500">
                <BookOpen size={26} />
              </div>

              <span className="text-3xl font-bold">
                SkillBridge
              </span>
            </Link>

            <p className="mt-6 leading-8 text-slate-300">
              SkillBridge helps learners build practical skills,
              earn certifications, and grow their careers through
              high-quality online education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Support
            </h3>

            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition hover:text-cyan-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400" size={20} />
                <span className="text-slate-300">
                  support@skillbridge.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-cyan-400" size={20} />
                <span className="text-slate-300">
                  +88018xxxxxxxx
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-cyan-400" size={20} />
                <span className="text-slate-300">
                  Dhaka, Bangladesh
                </span>
              </div>

            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">

              <Link
                href="https://facebook.com"
                target="_blank"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                <FaGithub size={18} />
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-400">
          © {new Date().getFullYear()} SkillBridge. All rights reserved.
        </div>

      </div>
    </footer>
  );
}