export default function Contact() {
  return (
    <div className="paper-grid min-h-screen">
      <section className="content-surface mx-auto w-full max-w-4xl px-6 py-14">
        <header className="reveal mb-10 border-b border-[var(--border)] pb-8">
          <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Contact</p>
          <h1 className="text-strong text-4xl md:text-5xl">Contact info + socials</h1>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">
            Reach out for meeting, tutoring and consulting, or anything else on your mind that you wanna chat about.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="mailto:jzyzak@college.harvard.edu"
            className="reveal reveal-delay-1 border border-[var(--border)] bg-[var(--background)]/94 p-5 transition-colors hover:bg-white/90"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Email</p>
            <p className="text-[var(--foreground)]">jzyzak@college.harvard.edu</p>
          </a>

          <a
            href="https://www.linkedin.com/in/josh-zyzak"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-delay-2 border border-[var(--border)] bg-[var(--background)]/94 p-5 transition-colors hover:bg-white/90"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">LinkedIn</p>
            <p className="text-[var(--foreground)]">/in/josh-zyzak</p>
          </a>

          <a
            href="https://instagram.com/josh_zyzak"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-delay-3 border border-[var(--border)] bg-[var(--background)]/94 p-5 transition-colors hover:bg-white/90"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Instagram</p>
            <p className="text-[var(--foreground)]">@josh_zyzak</p>
          </a>
        </div>
      </section>
    </div>
  );
}
