import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardWelcome() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white shadow-xl">

      <h1 className="text-4xl font-bold">
        Welcome back,
        <span className="ml-2">
          {session?.user?.name}
        </span>
        👋
      </h1>

      <p className="mt-4 max-w-2xl text-cyan-100">
        Manage your courses, update content, monitor your teaching
        progress and grow your online academy.
      </p>

    </div>
  );
}