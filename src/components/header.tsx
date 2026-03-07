import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600">
            <span className="text-lg font-bold text-white">M</span>
          </div>
          <span className="text-xl font-bold text-gray-900">MindNestCorp</span>
        </Link>

        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-primary-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
