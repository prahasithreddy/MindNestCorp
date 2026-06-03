import Link from "next/link";

const products = [
  {
    name: "BillMind",
    tagline: "Smart payment reminders",
    description:
      "Automate WhatsApp and email payment reminders for your customers. Set the schedule once, and BillMind handles follow-ups until the invoice is settled.",
    href: "https://billmind.mindnestcorp.com",
    external: true,
  },
  {
    name: "Vesto",
    tagline: "AI-powered stock intelligence",
    description:
      "A mobile app for modern investors. Track markets, research any stock with AI-generated institutional reports, and manage a smart watchlist — all in one place.",
    href: "/vesto",
    external: false,
  },
  {
    name: "Document Renamer",
    tagline: "AI document renaming at scale",
    description:
      "Upload a batch of files and get clean, descriptive, AI-generated filenames in seconds. Supports PDF, Word, Excel, CSV, and more.",
    href: "https://documentrenamer.com",
    external: true,
  },
];

const values = [
  {
    title: "One job, done right",
    description:
      "Every product we ship is scoped tightly. It solves one problem, and it solves it well.",
  },
  {
    title: "No unnecessary complexity",
    description:
      "We remove every layer of friction we can. Simple interfaces, clear pricing, fast onboarding.",
  },
  {
    title: "Quality is the default",
    description:
      "We don't ship things we wouldn't use ourselves. Quality isn't a feature — it's the baseline.",
  },
  {
    title: "Built to last",
    description:
      "Our products are maintained, improved, and supported for the long term — not abandoned after launch.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 sm:py-44">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              Micro SaaS studio
            </div>

            <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-50 sm:text-7xl">
              We build tools,
              <br />
              not platforms.
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-neutral-400">
              MindNestCorp creates tightly scoped software products. Each one
              does a single job exceptionally — no bloat, no lock-in, nothing
              you didn&apos;t ask for.
            </p>

            <div className="mt-10 flex items-center justify-center gap-3">
              <Link
                href="/products"
                className="rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
              >
                Explore products
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-white/[0.1] bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-neutral-300 transition-colors hover:bg-white/[0.08]"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Our work
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
              What we&apos;ve built
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-xl border border-white/[0.08] bg-neutral-900 p-6 transition-all duration-200 hover:border-white/[0.14] hover:bg-neutral-800/60"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-neutral-50">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500">
                      {product.tagline}
                    </p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-primary-500/10 px-2.5 py-1 text-xs font-medium text-primary-400">
                    <span className="h-1 w-1 rounded-full bg-primary-400" />
                    Live
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-6 text-neutral-400">
                  {product.description}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors group-hover:text-neutral-200">
                  Visit product
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
                Our approach
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
                Built with
                <br />
                intention.
              </h2>
              <p className="mt-5 text-neutral-400 leading-7">
                Every product starts with a precise definition of the problem.
                We build exactly what&apos;s needed — then stop. Restraint is a
                design decision.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-300 transition-colors hover:text-neutral-50"
              >
                More about how we work
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

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title}>
                  <div className="mb-3 h-px w-8 bg-primary-500" />
                  <h3 className="text-sm font-semibold text-neutral-50">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/[0.08] bg-neutral-900 px-8 py-14 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-50 sm:text-4xl">
              Ready to see what we&apos;ve made?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-neutral-400">
              Three live products, built to work from day one. No trial
              friction, no onboarding calls required.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link
                href="/products"
                className="rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
              >
                View all products
              </Link>
              <Link
                href="/contact"
                className="rounded-lg border border-white/[0.1] bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-neutral-300 transition-colors hover:bg-white/[0.08]"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
