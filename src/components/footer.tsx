import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MindNestCorp</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-gray-600">
              Building innovative micro SaaS products that solve real problems. 
              We create focused, efficient tools that help businesses grow.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-primary-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-gray-600 hover:text-primary-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary-600">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:hello@mindnestcorp.com" className="text-sm text-gray-600 hover:text-primary-600">
                  hello@mindnestcorp.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MindNestCorp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
