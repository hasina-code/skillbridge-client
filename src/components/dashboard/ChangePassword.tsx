"use client";

import { LockKeyhole } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type PasswordFormData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormData>();

  const newPassword = watch("newPassword");

  const onSubmit = async (data: PasswordFormData) => {
    try {
      console.log(data);

      // এখানে পরে API Call করবেন
      // await axios.patch("/api/change-password", data);

      toast.success("Password changed successfully.");

      reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to change password.");
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-[#111827]">

      <div className="mb-8 flex items-center gap-3">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
          <LockKeyhole size={24} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Change Password
          </h2>

          <p className="text-slate-500 dark:text-slate-400">
            Update your account password.
          </p>
        </div>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >

        {/* Current Password */}

        <div>

          <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            Current Password
          </label>

          <input
            type="password"
            {...register("currentPassword", {
              required: "Current password is required",
            })}
            placeholder="Enter current password"
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          {errors.currentPassword && (
            <p className="mt-2 text-sm text-red-500">
              {errors.currentPassword.message}
            </p>
          )}

        </div>

        {/* New Password */}

        <div>

          <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            New Password
          </label>

          <input
            type="password"
            {...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Enter new password"
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          {errors.newPassword && (
            <p className="mt-2 text-sm text-red-500">
              {errors.newPassword.message}
            </p>
          )}

        </div>

        {/* Confirm Password */}

        <div>

          <label className="mb-2 block font-medium text-slate-700 dark:text-slate-300">
            Confirm Password
          </label>

          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm password is required",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
            placeholder="Confirm new password"
            className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

          {errors.confirmPassword && (
            <p className="mt-2 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}

        </div>

        {/* Button */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting
            ? "Changing..."
            : "Change Password"}
        </button>

      </form>

    </div>
  );
}