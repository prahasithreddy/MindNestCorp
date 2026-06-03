import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products - MindNestCorp",
  description:
    "Explore the MindNestCorp product suite — focused software tools built to solve one problem exceptionally well.",
};

const products = [
  {
    name: "BillMind",
    tagline: "Smart payment reminders",
    description:
      "Stop chasing unpaid invoices manually. BillMind automates payment reminders over WhatsApp and email — you set the schedule once, and it handles follow-ups until the invoice is settled. Built specifically for Indian businesses.",
    href: "https://billmind.mindnestcorp.com",
    external: true,
    features: [
      "WhatsApp and email reminders",
      "Configurable reminder schedule",
      "Automatic stop on payment received",
      "Dashboard with payment analytics",
    ],
  },
  {
    name: "Vesto",
    tagline: "AI-powered stock intelligence",
    description:
      "A mobile app for modern investors. Track real-time market data, research any stock with AI-generated institutional-style reports, manage a smart watchlist, and follow curated market news — all in one dark, beautifully designed app.",
    href: "/vesto",
    external: false,
    features: [
      "AI-generated institutional research reports",
      "Real-time market dashboard and heatmap",
      "Smart watchlist with technical indicators",
      "Market news feed and earnings calendar",
    ],
  },
  {
    name: "Document Renamer",
    tagline: "AI document renaming at scale",
    description:
      "Upload a batch of files and get clean, descriptive, AI-generated filenames in seconds. The AI reads file content to produce meaningful names — not just sequential numbers. Supports PDF, Word, Excel, CSV, PowerPoint, and more.",
    href: "https://documentrenamer.com",
    external: true,
    features: [
      "Batch process 100+ files at once",
      "AI understands file content, not just metadata",
      "Privacy-first — downloads are packaged locally",
      "Supports PDF, DOCX, XLSX, CSV, PPTX, and more",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Our products
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
            Three tools.
            <br />
            Three problems solved.
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-400">
            Each product is designed to do one job exceptionally well. No
            upsells, no bloat — just software that works.
          </p>
        </div>

        {/* Product list */}
        <div className="mx-auto mt-20 space-y-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group rounded-2xl border border-white/[0.08] bg-neutral-900 p-8 transition-colors hover:border-white/[0.12] sm:p-10"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-16">
                {/* Left: info */}
                <div className="lg:col-span-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-neutral-600">
                          0{index + 1}
                        </span>
                        <h2 className="text-xl font-semibold text-neutral-50">
                          {product.name}
                        </h2>
                      </div>
                      <p className="mt-1 text-sm text-neutral-500">
                        {product.tagline}
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-primary-500/10 px-2.5 py-1 text-xs font-medium text-primary-400">
                      <span className="h-1 w-1 rounded-full bg-primary-400" />
                      Live
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-neutral-400">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    target={product.external ? "_blank" : undefined}
                    rel={
                      product.external ? "noopener noreferrer" : undefined
                    }
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
                  >
                    Try {product.name}
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Right: features */}
                <div className="lg:col-span-2">
                  <p className="text-xs font-medium uppercase tracking-widest text-neutral-600">
                    Key features
                  </p>
                  <ul className="mt-4 space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-neutral-400"
                      >
                        <span className="mt-1.5 h-1 w-4 shrink-0 bg-primary-500/40" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming */}
        <div className="mx-auto mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 text-center">
          <h3 className="text-base font-semibold text-neutral-50">
            More on the way
          </h3>
          <p className="mt-2 text-sm text-neutral-500">
            We&apos;re always working on something new. Follow our progress or
            reach out if you have a problem worth solving.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-200"
          >
            Get in touch
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
