import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products - MindNestCorp",
  description: "Explore our suite of micro SaaS products designed to solve real business problems.",
};

const liveProducts = [
  {
    name: "BillMind",
    tagline: "Smart Payment Reminders",
    description:
      "Automate payment reminders via WhatsApp and Email. Set it once, and let your customers receive timely reminders until they pay. Built for Indian businesses.",
    status: "Live",
    href: "https://billmind.mindnestcorp.com",
    features: [
      "WhatsApp & Email reminders",
      "Scheduled reminder days",
      "Auto-stop on payment",
      "Dashboard with analytics",
    ],
  },
  {
    name: "Vesto",
    tagline: "AI-Powered Stock Market Intelligence",
    description:
      "A mobile app for modern investors. Track real-time market data, research any stock with AI-generated institutional reports, manage a smart watchlist, follow curated market news, and monitor upcoming earnings — all in one dark, beautifully designed app.",
    status: "Live",
    href: "/vesto",
    features: [
      "AI-powered institutional research reports",
      "Real-time market dashboard & heatmap",
      "Smart watchlist with technical indicators",
      "Curated market news & earnings calendar",
    ],
  },
];

const upcomingProducts = [
  {
    name: "TaskFlow Pro",
    description:
      "A lightweight task management tool that helps teams stay organized without the complexity of traditional project management software.",
    features: ["Kanban boards", "Time tracking", "Team collaboration", "API integrations"],
  },
  {
    name: "InvoiceSnap",
    description:
      "Generate professional invoices in seconds. Perfect for freelancers and small businesses who need simple, elegant invoicing.",
    features: ["One-click invoicing", "Payment tracking", "Client management", "Export to PDF"],
  },
];

export default function ProductsPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Focused solutions for modern businesses. Each product is designed to do
            one thing exceptionally well.
          </p>
        </div>

        {/* Live Products */}
        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900">Live Now</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {liveProducts.map((product) => (
              <div
                key={product.name}
                className="flex flex-col rounded-2xl border-2 border-primary-200 bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary-600">{product.tagline}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    {product.status}
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm text-gray-600">{product.description}</p>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900">Key Features</h4>
                  <ul className="mt-3 space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <svg
                          className="mr-2 h-4 w-4 shrink-0 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                >
                  Try {product.name}
                  <svg
                    className="ml-2 h-4 w-4"
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
            ))}
          </div>
        </div>

        {/* Upcoming Products */}
        <div className="mx-auto mt-20 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {upcomingProducts.map((product) => (
              <div
                key={product.name}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                    Coming Soon
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm text-gray-600">{product.description}</p>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900">Key Features</h4>
                  <ul className="mt-3 space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <svg
                          className="mr-2 h-4 w-4 shrink-0 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className="mt-8 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 cursor-not-allowed"
                  disabled
                >
                  Notify Me When Available
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* More Coming */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-primary-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">More Products on the Way</h2>
          <p className="mt-2 text-gray-600">
            We&apos;re constantly building new micro SaaS solutions. Stay tuned for
            updates on our upcoming products.
          </p>
        </div>
      </div>
    </div>
  );
}
