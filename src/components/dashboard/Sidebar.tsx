"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BookOpenCheck,
  BookPlus,
  FolderOpen,
  BarChart3,
  User,
  Settings,
  LogOut,
  GraduationCap,
  X,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const menuItems = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "My Courses", href: "/dashboard/my-courses", icon: BookOpenCheck },
  { title: "Add Course", href: "/dashboard/add-course", icon: BookPlus },
  { title: "Manage Courses", href: "/dashboard/manage-courses", icon: FolderOpen },
  { title: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { title: "Profile", href: "/dashboard/profile", icon: User },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { data } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-slate-200 bg-white p-5 transition-transform duration-300 dark:border-slate-800 dark:bg-[#0F172A] lg:sticky lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white">
              <GraduationCap size={22} />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">SkillBridge</h2>
          </div>
          <button onClick={() => setOpen(false)} className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
            <X size={20} />
          </button>
        </div>

        {/* User Profile */}
        <div className="mb-6 flex shrink-0 flex-col items-center rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/40">
          <Image
            src={data?.user?.image || "https://i.pravatar.cc/150?img=32"}
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full border-2 border-cyan-500 object-cover"
          />
          <h2 className="mt-3 text-sm font-bold text-slate-900 dark:text-white truncate">
            {data?.user?.name || "Hasina Akter"}
          </h2>
          <p className="text-xs text-slate-500">{data?.user?.email || "hasina@gmail.com"}</p>
        </div>

        {/* Menu Items - Scrollable */}
        <nav className="flex-1 space-y-1 overflow-y-auto pr-2 scrollbar-thin">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  active
                    ? "bg-cyan-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                <Icon size={18} />
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Logout Footer */}
        <div className="mt-4 shrink-0 border-t border-slate-200 pt-4 dark:border-slate-700">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl bg-red-500 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600 transition"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>
    </>
  );
}