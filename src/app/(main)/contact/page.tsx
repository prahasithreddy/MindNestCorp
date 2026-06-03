import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - MindNestCorp",
  description:
    "Get in touch with MindNestCorp — we respond personally and promptly.",
};

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-50 sm:text-5xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-5 text-lg leading-8 text-neutral-400">
            We&apos;re a small team. That means when you email us, an actual
            person reads it — and responds.
          </p>

          {/* Contact card */}
          <div className="mt-14 rounded-2xl border border-white/[0.08] bg-neutral-900 p-8 sm:p-10">
            <div className="space-y-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-neutral-600">
                  Email
                </p>
                <a
                  href="mailto:hello@mindnestcorp.com"
                  className="mt-2 block text-lg font-medium text-neutral-50 transition-colors hover:text-primary-400"
                >
                  hello@mindnestcorp.com
                </a>
                <p className="mt-1.5 text-sm text-neutral-500">
                  We aim to reply within 48 hours.
                </p>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-neutral-600">
                  What to reach us about
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Questions about our products",
                    "Partnership or business inquiries",
                    "Press and media",
                    "Custom enterprise work",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-neutral-400">
                      <span className="mt-1.5 h-1 w-4 shrink-0 bg-primary-500/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Products shortcut */}
          <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
            <p className="text-sm text-neutral-500">
              Looking for product-specific support?{" "}
              <Link
                href="/products"
                className="font-medium text-neutral-300 transition-colors hover:text-neutral-50"
              >
                Browse our products
              </Link>{" "}
              — each one has its own documentation and support channel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
