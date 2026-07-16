import SettingsCard from "@/components/dashboard/SettingsCard";
import NotificationSettings from "@/components/dashboard/NotificationSettings";
import SecuritySettings from "@/components/dashboard/SecuritySettings";
import ThemeSettings from "@/components/dashboard/ThemeSettings";

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Settings
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Manage your application preferences and account settings.
        </p>
      </div>

      <div className="grid gap-8">

        <SettingsCard
          title="Appearance"
          description="Customize your theme."
        >
          <ThemeSettings />
        </SettingsCard>

        <SettingsCard
          title="Notifications"
          description="Choose how you receive updates."
        >
          <NotificationSettings />
        </SettingsCard>

        <SettingsCard
          title="Security"
          description="Protect your account."
        >
          <SecuritySettings />
        </SettingsCard>

      </div>

    </div>
  );
}