"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#081220]">

      {/* Desktop Layout */}

      <div className="flex">

        {/* Sidebar */}

        <Sidebar
          open={open}
          setOpen={setOpen}
        />

        {/* Right Content */}

        <div className="flex min-h-screen flex-1 flex-col">

          {/* Navbar */}

          <DashboardNavbar
            setOpen={setOpen}
          />

          {/* Main Content */}

          <main className="flex-1 p-6 md:p-8">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
}