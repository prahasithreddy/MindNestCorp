import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - MindNestCorp",
  description: "Learn about MindNestCorp and our mission to build innovative micro SaaS products.",
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            About MindNestCorp
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;re a team passionate about building software that makes a difference. 
            Our focus is on creating micro SaaS products that are simple, effective, 
            and affordable.
          </p>
        </div>

        {/* Mission */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="rounded-2xl bg-primary-50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              At MindNestCorp, we believe that great software doesn&apos;t need to be 
              complicated. Our mission is to build focused, efficient tools that solve 
              real problems for businesses of all sizes. We reject feature bloat and 
              embrace simplicity, creating products that users actually enjoy using.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mx-auto mt-20 max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Our Values
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <ValueCard
              title="Simplicity First"
              description="We believe the best software is invisible. It should help you accomplish your goals without getting in the way."
            />
            <ValueCard
              title="User-Centric Design"
              description="Every feature we build starts with a real user need. We listen to our customers and iterate based on their feedback."
            />
            <ValueCard
              title="Quality Over Quantity"
              description="We'd rather have one product that works perfectly than ten that are mediocre. Quality is non-negotiable."
            />
            <ValueCard
              title="Transparent Pricing"
              description="No hidden fees, no surprise charges. What you see is what you pay, and we price fairly for the value we deliver."
            />
          </div>
        </div>

        {/* Story */}
        <div className="mx-auto mt-20 max-w-4xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Our Story
          </h2>
          <div className="mt-8 space-y-6 text-gray-600">
            <p>
              MindNestCorp was founded with a simple observation: most business software 
              tries to do too much. Teams end up paying for features they&apos;ll never use, 
              wrestling with complex interfaces, and spending more time managing their 
              tools than doing actual work.
            </p>
            <p>
              We decided to take a different approach. Instead of building one massive 
              platform, we&apos;re creating a suite of focused micro SaaS products. Each 
              tool does one thing exceptionally well, integrates seamlessly with your 
              existing workflow, and costs a fraction of traditional enterprise software.
            </p>
            <p>
              Today, we&apos;re working on multiple products across different domains, all 
              united by our commitment to simplicity, quality, and user experience. 
              We&apos;re excited about the future and can&apos;t wait to share more with you.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mx-auto mt-20 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">Want to Learn More?</h2>
          <p className="mt-4 text-gray-600">
            We&apos;d love to hear from you. Reach out to us at{" "}
            <a
              href="mailto:hello@mindnestcorp.com"
              className="text-primary-600 hover:text-primary-700"
            >
              hello@mindnestcorp.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}
