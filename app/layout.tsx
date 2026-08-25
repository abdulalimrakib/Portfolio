import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { env } from "@/server/env";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} | ${profile.title}`;
const description = profile.heroSummary;

export const metadata: Metadata = {
  metadataBase: new URL(env.BETTER_AUTH_URL),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: env.BETTER_AUTH_URL }],
  keywords: [
    "AI/ML Engineer",
    "Machine Learning",
    "NLP",
    "LLM",
    "Computer Vision",
    "Full-Stack Developer",
    profile.name,
  ],
  openGraph: {
    type: "website",
    title,
    description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
