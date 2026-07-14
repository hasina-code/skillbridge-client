"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ReadMoreButtonProps {
  href?: string;
}

export default function ReadMoreButton({
  href = "/blogs",
}: ReadMoreButtonProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg"
    >
      Read More

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}