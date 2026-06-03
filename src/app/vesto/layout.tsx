import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vesto — AI-Powered Stock Market Intelligence",
  description:
    "Track markets, research stocks with AI, monitor your watchlist, and stay ahead of earnings — all in one beautifully designed app.",
  keywords: ["stock market", "investing app", "AI research", "watchlist", "earnings calendar", "market news"],
  openGraph: {
    title: "Vesto — AI-Powered Stock Market Intelligence",
    description:
      "Track markets, research stocks with AI, monitor your watchlist, and stay ahead of earnings.",
    type: "website",
    url: "https://mindnestcorp.com/vesto",
  },
};

export default function VestoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} bg-[#0a0a0a] text-white antialiased min-h-screen flex flex-col`}>
      <VestoNav />
      <main className="flex-1">{children}</main>
      <VestoFooter />
    </div>
  );
}

function VestoNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/vesto" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4F53C]">
            <span className="text-sm font-black text-black">V</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">Vesto</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="https://mindnestcorp.com"
            className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
          >
            MindNestCorp
          </Link>
          <a
            href="#download"
            className="rounded-lg bg-[#D4F53C] px-4 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Download App
          </a>
        </div>
      </nav>
    </header>
  );
}

function VestoFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#D4F53C]">
              <span className="text-xs font-black text-black">V</span>
            </div>
            <span className="text-sm font-semibold text-white">Vesto</span>
            <span className="text-sm text-gray-500">by</span>
            <Link
              href="https://mindnestcorp.com"
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              MindNestCorp
            </Link>
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} MindNestCorp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
