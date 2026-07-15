"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-100 dark:bg-[#081220]">

      <div className="flex min-h-screen">

        {/* Sidebar */}

        <Sidebar
          open={open}
          setOpen={setOpen}
        />

        {/* Right Content */}

        <div className="flex min-h-screen min-w-0 flex-1 flex-col">

          <DashboardNavbar
            setOpen={setOpen}
          />

          <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6 lg:p-8">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
}