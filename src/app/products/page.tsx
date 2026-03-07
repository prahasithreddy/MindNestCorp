import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - MindNestCorp",
  description: "Explore our suite of micro SaaS products designed to solve real business problems.",
};

const products = [
  {
    name: "TaskFlow Pro",
    description:
      "A lightweight task management tool that helps teams stay organized without the complexity of traditional project management software.",
    status: "Coming Soon",
    features: ["Kanban boards", "Time tracking", "Team collaboration", "API integrations"],
  },
  {
    name: "InvoiceSnap",
    description:
      "Generate professional invoices in seconds. Perfect for freelancers and small businesses who need simple, elegant invoicing.",
    status: "Coming Soon",
    features: ["One-click invoicing", "Payment tracking", "Client management", "Export to PDF"],
  },
  {
    name: "FeedbackLoop",
    description:
      "Collect and analyze customer feedback effortlessly. Turn insights into action with our intuitive feedback management system.",
    status: "Coming Soon",
    features: ["Survey builder", "Analytics dashboard", "NPS tracking", "Response automation"],
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

        {/* Products Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">{product.name}</h2>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                  {product.status}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm text-gray-600">{product.description}</p>
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-900">Key Features</h3>
                <ul className="mt-3 space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <svg
                        className="mr-2 h-4 w-4 text-primary-600"
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
                className="mt-8 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                disabled
              >
                Notify Me When Available
              </button>
            </div>
          ))}
        </div>

        {/* Coming Soon Notice */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl bg-primary-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">More Products Coming Soon</h2>
          <p className="mt-2 text-gray-600">
            We&apos;re constantly working on new micro SaaS solutions. Stay tuned for 
            updates on our upcoming products.
          </p>
        </div>
      </div>
    </div>
  );
}
