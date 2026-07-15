import {
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";

type UserType = {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  bio?: string;
};

type ProfileInfoProps = {
  user: UserType;
};

export default function ProfileInfo({
  user,
}: ProfileInfoProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-[#111827]">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Personal Information
        </h2>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Your account details and contact information.
        </p>

      </div>

      {/* Information */}

      <div className="grid gap-6 md:grid-cols-2">

        {/* Name */}

        <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">

          <div className="mb-3 flex items-center gap-3">

            <User
              size={20}
              className="text-cyan-500"
            />

            <h3 className="font-semibold text-slate-700 dark:text-slate-300">
              Full Name
            </h3>

          </div>

          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            {user.name}
          </p>

        </div>

        {/* Email */}

        <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">

          <div className="mb-3 flex items-center gap-3">

            <Mail
              size={20}
              className="text-cyan-500"
            />

            <h3 className="font-semibold text-slate-700 dark:text-slate-300">
              Email
            </h3>

          </div>

          <p className="break-all text-lg font-semibold text-slate-900 dark:text-white">
            {user.email}
          </p>

        </div>

        {/* Phone */}

        <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">

          <div className="mb-3 flex items-center gap-3">

            <Phone
              size={20}
              className="text-cyan-500"
            />

            <h3 className="font-semibold text-slate-700 dark:text-slate-300">
              Phone
            </h3>

          </div>

          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            {user.phone || "Not Added"}
          </p>

        </div>

        {/* Address */}

        <div className="rounded-2xl border border-slate-200 p-5 dark:border-slate-700">

          <div className="mb-3 flex items-center gap-3">

            <MapPin
              size={20}
              className="text-cyan-500"
            />

            <h3 className="font-semibold text-slate-700 dark:text-slate-300">
              Address
            </h3>

          </div>

          <p className="text-lg font-semibold text-slate-900 dark:text-white">
            {user.address || "Not Added"}
          </p>

        </div>

      </div>

      {/* Bio */}

      <div className="mt-8 rounded-2xl border border-slate-200 p-5 dark:border-slate-700">

        <div className="mb-3 flex items-center gap-3">

          <FileText
            size={20}
            className="text-cyan-500"
          />

          <h3 className="font-semibold text-slate-700 dark:text-slate-300">
            Bio
          </h3>

        </div>

        <p className="leading-7 text-slate-600 dark:text-slate-400">
          {user.bio ||
            "No bio has been added yet. You can update your profile information later."}
        </p>

      </div>

    </div>
  );
}