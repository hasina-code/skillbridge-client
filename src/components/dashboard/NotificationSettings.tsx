"use client";

import { useState } from "react";
import { Bell, Mail, BookOpen } from "lucide-react";

export default function NotificationSettings() {
  const [emailNotification, setEmailNotification] = useState(true);
  const [courseUpdate, setCourseUpdate] = useState(true);
  const [marketingEmail, setMarketingEmail] = useState(false);

  return (
    <div className="space-y-6">

      {/* Email Notification */}

      <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 dark:border-slate-700">

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-cyan-100 p-3 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400">
            <Mail size={22} />
          </div>

          <div>

            <h3 className="font-semibold text-slate-900 dark:text-white">
              Email Notifications
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Receive important account updates by email.
            </p>

          </div>

        </div>

        <input
          type="checkbox"
          checked={emailNotification}
          onChange={() =>
            setEmailNotification(!emailNotification)
          }
          className="h-5 w-5 accent-cyan-500"
        />

      </div>

      {/* Course Updates */}

      <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 dark:border-slate-700">

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-green-100 p-3 text-green-600 dark:bg-green-500/20 dark:text-green-400">
            <BookOpen size={22} />
          </div>

          <div>

            <h3 className="font-semibold text-slate-900 dark:text-white">
              Course Updates
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Notify me when my courses receive updates.
            </p>

          </div>

        </div>

        <input
          type="checkbox"
          checked={courseUpdate}
          onChange={() =>
            setCourseUpdate(!courseUpdate)
          }
          className="h-5 w-5 accent-cyan-500"
        />

      </div>

      {/* Marketing Emails */}

      <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 dark:border-slate-700">

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-orange-100 p-3 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400">
            <Bell size={22} />
          </div>

          <div>

            <h3 className="font-semibold text-slate-900 dark:text-white">
              Marketing Emails
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Receive news, offers and product announcements.
            </p>

          </div>

        </div>

        <input
          type="checkbox"
          checked={marketingEmail}
          onChange={() =>
            setMarketingEmail(!marketingEmail)
          }
          className="h-5 w-5 accent-cyan-500"
        />

      </div>

    </div>
  );
}