"use client";

import "./globals.css";
import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import ThemeProvider from "@/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
           <Toaster position="top-right" />
          {!isDashboard && <Navbar />}

          {children}

          {!isDashboard && <Footer />}
        </ThemeProvider>
      </body>
    </html>
  );
}