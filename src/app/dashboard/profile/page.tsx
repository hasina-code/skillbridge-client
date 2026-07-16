import { headers } from "next/headers";
import { auth } from "@/lib/auth";


import ChangePassword from "@/components/dashboard/ChangePassword";
import ProfileCard from "@/components/dashboard/ProfileCard";

export default async function ProfilePage() {
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.email) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-red-600">
        Please login first.
      </div>
    );
  }

  const host = (await headers()).get("host");

  const protocol =
    process.env.NODE_ENV === "development"
      ? "http"
      : "https";


  const res = await fetch(
    `${protocol}://${host}/api/users?email=${session.user.email}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch profile.");
  }

  const user = await res.json();

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          View your personal information and update your profile image.
        </p>
      </div>

      {/* Content */}

      <div className="grid gap-8 lg:grid-cols-3">

        {/* Left */}

        <div className="lg:col-span-1">
          <ProfileCard user={user} />
        </div>

        {/* Right */}

        <div className="lg:col-span-2">
          <ChangePassword />
        </div>

      </div>

    </div>
  );
}