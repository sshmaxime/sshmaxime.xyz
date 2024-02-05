import "./globals.css";

import Footer from "@/app/(navigation)/footer";
import Navbar from "@/app/(navigation)/header";
import { Providers } from "@/config";
import { inter } from "@/config/fonts";

import { cn } from "@/utils/cn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Title.",
  description: "Description.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={`${inter.variable}`}>
      <meta name="format-detection" content="telephone=no" />
      <body className={cn("font-inter flex min-h-screen flex-col antialiased")}>
        <Providers.QueryProvider>
          <Providers.ThemeProvider>
            <Navbar />
            <main className="mb-auto">{children}</main>
            <Footer />
          </Providers.ThemeProvider>
        </Providers.QueryProvider>
      </body>
    </html>
  );
}
