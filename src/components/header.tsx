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

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-neutral-950/90 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tight text-neutral-50 group-hover:text-neutral-200 transition-colors">
            MindNestCorp
          </span>
        </Link>

        <ul className="flex items-center gap-0.5">
          <li>
            <Link
              href="/"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/[0.05] hover:text-neutral-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/[0.05] hover:text-neutral-200"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="rounded-md px-3 py-1.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/[0.05] hover:text-neutral-200"
            >
              About
            </Link>
          </li>
          <li className="ml-2">
            <Link
              href="/contact"
              className="rounded-md border border-white/[0.1] bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/[0.1]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
