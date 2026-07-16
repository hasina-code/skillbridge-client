import { ReactNode } from "react";

type SettingsCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function SettingsCard({
  title,
  description,
  children,
}: SettingsCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-[#111827]">

      {/* Header */}

      <div className="mb-6 border-b border-slate-200 pb-5 dark:border-slate-800">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          {description}
        </p>

      </div>

      {/* Content */}

      <div>{children}</div>

    </div>
  );
}