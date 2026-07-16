"use client";

import { useState } from "react";
import { ShieldCheck, KeyRound, LogOut } from "lucide-react";
import toast from "react-hot-toast";

export default function SecuritySettings() {
  const [twoFactor, setTwoFactor] = useState(false);

  const handleLogoutDevices = () => {
    toast.success("Logged out from all devices.");
  };

  return (
    <div className="space-y-6">

      {/* Change Password */}

      <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 p-6 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
            <KeyRound size={22} />
          </div>

          <div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Change Password
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Update your password regularly to keep your account secure.
            </p>

          </div>

        </div>

        <button
          className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-600"
        >
          Change Password
        </button>

      </div>

      {/* Two Factor */}

      <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 p-6 dark:border-slate-700 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-green-100 p-3 text-green-600 dark:bg-green-500/20 dark:text-green-400">
            <ShieldCheck size={22} />
          </div>

          <div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Two-Factor Authentication
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Add an extra layer of protection to your account.
            </p>

          </div>

        </div>

        <label className="inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={twoFactor}
            onChange={() => setTwoFactor(!twoFactor)}
            className="sr-only"
          />

          <div
            className={`relative h-7 w-14 rounded-full transition ${
              twoFactor
                ? "bg-cyan-500"
                : "bg-slate-300 dark:bg-slate-700"
            }`}
          >
            <span
              className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition ${
                twoFactor ? "translate-x-7" : ""
              }`}
            />
          </div>
        </label>

      </div>

      {/* Logout */}

      <div className="flex flex-col gap-5 rounded-2xl border border-red-200 p-6 dark:border-red-900 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-red-100 p-3 text-red-600 dark:bg-red-500/20 dark:text-red-400">
            <LogOut size={22} />
          </div>

          <div>

            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Logout All Devices
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              End all active sessions except the current one.
            </p>

          </div>

        </div>

        <button
          onClick={handleLogoutDevices}
          className="rounded-xl bg-red-500 px-6 py-3 font-medium text-white transition hover:bg-red-600"
        >
          Logout
        </button>

      </div>

    </div>
  );
}