import "./globals.css";

import ThemeProvider from "@/providers/ThemeProvider";
import LayoutWrapper from "@/components/LayoutWrapper";

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Toaster position="top-right" />

          <LayoutWrapper>
            {children}
          </LayoutWrapper>

        </ThemeProvider>
      </body>
    </html>
  );
}