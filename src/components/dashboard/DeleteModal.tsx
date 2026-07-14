"use client";

type DeleteModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function DeleteModal({ isOpen, onClose, onConfirm }: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#111827] p-6 rounded-3xl w-full max-w-sm border border-slate-200 dark:border-slate-800 shadow-2xl">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Delete Course</h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Are you sure you want to delete this course? This action cannot be undone.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <button 
            onClick={onClose} 
            className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition"
          >
            Cancel
          </button>
          <button 
            onClick={() => { onConfirm(); onClose(); }} 
            className="px-4 py-2 text-sm font-semibold bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}