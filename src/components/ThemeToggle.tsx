"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group h-11 w-11 rounded-full border border-cyan-500 flex items-center justify-center hover:bg-cyan-500 transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun
          size={21}
          className="text-yellow-400 animate-[spin_8s_linear_infinite]"
        />
      ) : (
        <Moon
          size={21}
          className="text-cyan-500 group-hover:text-white transition"
        />
      )}
    </button>
  );
}