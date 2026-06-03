import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MindNestCorp - Innovative Micro SaaS Solutions",
  description:
    "MindNestCorp builds focused, efficient micro SaaS products that solve real business problems.",
  keywords: ["SaaS", "micro SaaS", "software", "business tools", "productivity"],
  openGraph: {
    title: "MindNestCorp - Innovative Micro SaaS Solutions",
    description:
      "Building focused, efficient micro SaaS products that solve real business problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        {children}
      </body>
    </html>
  );
}
