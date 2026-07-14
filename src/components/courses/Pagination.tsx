"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border disabled:opacity-50"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`h-10 w-10 rounded-lg ${
            currentPage === i + 1
              ? "bg-cyan-500 text-white"
              : "border"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border disabled:opacity-50"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}