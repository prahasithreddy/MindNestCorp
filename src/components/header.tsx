"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-neutral-950/90 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tight text-neutral-50 group-hover:text-neutral-200 transition-colors">
            MindNestCorp
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/[0.05] hover:text-neutral-200"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              href="/contact"
              className="rounded-md border border-white/[0.1] bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/[0.1]"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-md text-neutral-400 hover:bg-white/[0.05] hover:text-neutral-200 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          {menuOpen ? (
            /* X icon */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="16" y2="16" />
              <line x1="16" y1="2" x2="2" y2="16" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="4.5" x2="16" y2="4.5" />
              <line x1="2" y1="9" x2="16" y2="9" />
              <line x1="2" y1="13.5" x2="16" y2="13.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
          menuOpen ? "max-h-64 border-b border-white/[0.06]" : "max-h-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-4 pb-3 pt-1 gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded-md px-3 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/[0.05] hover:text-neutral-200"
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-1">
            <Link
              href="/contact"
              className="block rounded-md border border-white/[0.1] bg-white/[0.06] px-3 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/[0.1]"
              tabIndex={menuOpen ? 0 : -1}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
