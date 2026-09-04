import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const siteUrl = "https://novi-landing.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Novi — Run your team without the tab switching",
  description:
    "Novi brings tasks, docs, and conversations into one calm workspace built for small, fast moving teams.",
  openGraph: {
    title: "Novi — one calm workspace for small teams",
    description:
      "Tasks, docs, and conversations in one place. Built for startups, agencies, and product teams.",
    url: siteUrl,
    siteName: "Novi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novi — one calm workspace for small teams",
    description:
      "Tasks, docs, and conversations in one place. Built for startups, agencies, and product teams.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
