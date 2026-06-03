import Link from "next/link";

function LogoMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <rect width="8" height="8" rx="1.5" fill="#3f3f46" />
      <rect x="10" width="8" height="8" rx="1.5" fill="#f97316" />
      <rect y="10" width="8" height="8" rx="1.5" fill="#3f3f46" />
      <rect x="10" y="10" width="8" height="8" rx="1.5" fill="#3f3f46" />
    </svg>
  );
}

const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const products = [
  { label: "BillMind", href: "https://billmind.mindnestcorp.com" },
  { label: "Vesto", href: "/vesto" },
  { label: "Document Renamer", href: "https://documentrenamer.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark />
              <span className="text-sm font-semibold tracking-tight text-neutral-50">MindNestCorp</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
              A micro SaaS studio. We build sharp, focused software products that solve one problem exceptionally well.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-600">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-600">
              Products
            </h3>
            <ul className="mt-4 space-y-2.5">
              {products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} MindNestCorp. All rights reserved.
          </p>
          <a
            href="mailto:hello@mindnestcorp.com"
            className="text-sm text-neutral-500 transition-colors hover:text-neutral-300"
          >
            hello@mindnestcorp.com
          </a>
        </div>
      </div>
    </footer>
  );
}
