import "./globals.css";

import Footer from "@/app/(navigation)/footer";
import Navbar from "@/app/(navigation)/header";
import { Providers } from "@/config";
import { inter } from "@/config/fonts";

import { cn } from "@/utils/cn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Maxime",
    default: "Maxime",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={`${inter.variable}`}>
      <meta name="format-detection" content="telephone=no" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={cn("flex min-h-screen flex-col font-inter antialiased")}>
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
