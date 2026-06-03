import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - MindNestCorp",
  description:
    "Learn about MindNestCorp — a micro SaaS studio that builds tightly scoped software products.",
};

const values = [
  {
    title: "Simplicity first",
    description:
      "The best interface is no interface. We strip everything down to what's essential, then ship.",
  },
  {
    title: "User-centric by default",
    description:
      "We start every project by identifying a real, recurring problem — not a feature idea.",
  },
  {
    title: "Quality over quantity",
    description:
      "We'd rather maintain three great products than rush ten mediocre ones. Depth beats breadth.",
  },
  {
    title: "Honest pricing",
    description:
      "No freemium traps, no pricing complexity. You pay a fair price for something that works.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            About us
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
            Small team. Sharp products.
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            MindNestCorp is a micro SaaS studio focused on building software
            that does one thing well. We believe the most useful tools are the
            ones that get out of your way.
          </p>
        </div>

        {/* Mission */}
        <div className="mx-auto mt-20 max-w-3xl">
          <div className="rounded-2xl border border-white/[0.08] bg-neutral-900 p-8 sm:p-10">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Our mission
            </p>
            <p className="mt-4 text-xl leading-8 text-neutral-200 sm:text-2xl">
              &ldquo;Build software that does exactly what it says — nothing
              more, nothing less.&rdquo;
            </p>
            <p className="mt-6 text-sm leading-7 text-neutral-400">
              Most business software tries to do too much. Teams end up paying
              for features they&apos;ll never use, wrestling with complex
              interfaces, and spending more time managing their tools than doing
              actual work. We take the opposite approach: tightly scoped
              products, built to solve one problem exceptionally well, and
              priced fairly.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="mx-auto mt-24 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Our story
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-50">
            How it started
          </h2>
          <div className="mt-6 space-y-5 text-neutral-400 leading-7">
            <p>
              MindNestCorp started with a simple frustration: most tools either
              did too little or too much. Either you were hacking workarounds in
              spreadsheets, or you were paying for a bloated platform you&apos;d
              never fully use.
            </p>
            <p>
              We decided to build a different kind of company. Instead of a
              single large platform, we&apos;re building a suite of focused
              products — each one solving exactly one problem, doing it well,
              and costing far less than the enterprise alternatives.
            </p>
            <p>
              Today, we have three live products and more in development. Each
              one was born from a real need, built with care, and shipped with
              the intention of being genuinely useful — not just impressive in a
              demo.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mx-auto mt-24 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Our values
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-50">
            What guides the work
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
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

        {/* Contact CTA */}
        <div className="mx-auto mt-24 max-w-3xl rounded-2xl border border-white/[0.08] bg-neutral-900 p-8 sm:p-10">
          <h2 className="text-xl font-semibold text-neutral-50">
            Want to learn more?
          </h2>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            We&apos;re a small team and we respond personally. If you have a
            question, an idea, or just want to chat about what we&apos;re
            building — reach out.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Get in touch
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-200"
            >
              See our products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
