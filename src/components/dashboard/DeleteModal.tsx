"use client";

import { Trash2, X } from "lucide-react";

type DeleteModalProps = {
  isOpen: boolean;
  loading: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteModal({
  isOpen,
  loading,
  onClose,
  onConfirm,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-[#111827]">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
              <Trash2 size={22} />
            </div>

            <div>

              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Delete Course
              </h2>

              <p className="text-sm text-slate-500">
                Permanent Action
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-lg p-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-slate-800"
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}

        <div className="space-y-4 p-6">

          <p className="text-slate-600 dark:text-slate-300">
            Are you sure you want to delete this course?
          </p>

          <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
            This action cannot be undone.
          </p>

        </div>

        {/* Footer */}

        <div className="flex gap-4 border-t border-slate-200 p-6 dark:border-slate-800">

          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-red-300"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>
    </div>
  );
}