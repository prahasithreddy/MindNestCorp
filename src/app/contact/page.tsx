import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - MindNestCorp",
  description: "Get in touch with MindNestCorp. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have a question or want to learn more about our products? We&apos;d love 
            to hear from you.
          </p>
        </div>

        {/* Contact Info */}
        <div className="mx-auto mt-16 max-w-xl">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                  <svg
                    className="h-5 w-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                  <a
                    href="mailto:hello@mindnestcorp.com"
                    className="mt-1 text-sm text-primary-600 hover:text-primary-700"
                  >
                    hello@mindnestcorp.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                  <svg
                    className="h-5 w-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Website</h3>
                  <p className="mt-1 text-sm text-gray-600">www.mindnestcorp.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-gray-50 p-6">
              <h3 className="text-sm font-semibold text-gray-900">Business Inquiries</h3>
              <p className="mt-2 text-sm text-gray-600">
                For partnership opportunities, press inquiries, or business 
                collaborations, please email us directly and we&apos;ll get back to 
                you within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
