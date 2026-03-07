import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Building the Future with{" "}
              <span className="text-primary-600">Micro SaaS</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At MindNestCorp, we create focused, efficient software solutions that 
              solve real problems. Our suite of micro SaaS products helps businesses 
              streamline operations and boost productivity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/products"
                className="rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
              >
                Explore Products
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose MindNestCorp?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We focus on building products that matter
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🎯"
              title="Focused Solutions"
              description="Each product solves one problem exceptionally well, without feature bloat."
            />
            <FeatureCard
              icon="⚡"
              title="Fast & Efficient"
              description="Lightweight tools that integrate seamlessly into your existing workflow."
            />
            <FeatureCard
              icon="💰"
              title="Affordable Pricing"
              description="Pay only for what you need with our transparent, scalable pricing."
            />
            <FeatureCard
              icon="🔒"
              title="Secure by Design"
              description="Enterprise-grade security built into every product from day one."
            />
            <FeatureCard
              icon="🚀"
              title="Rapid Updates"
              description="Continuous improvements based on real user feedback."
            />
            <FeatureCard
              icon="💬"
              title="Dedicated Support"
              description="Our team is always ready to help you succeed."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-primary-100">
              Discover how our micro SaaS products can transform your business.
            </p>
            <div className="mt-8">
              <Link
                href="/products"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm transition-colors hover:bg-primary-50"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
