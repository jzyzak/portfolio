'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[var(--background)]">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-end px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
            Home
          </Link>
          <Link href="/experiences" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
            Projects
          </Link>
          <Link href="/contact" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}