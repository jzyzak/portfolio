const projects = [
  {
    name: "Spectre Capital",
    details: "Hedge fund for prediction markets (currently at 80% returns in a few days)",
  },
  {
    name: "MedPilot",
    details: "Platform for handling your medical conditions and scheduling your appointments",
    link: "https://www.medpilot.us/",
  },
  {
    name: "Powkie",
    details: "A social poker platform for creating, discovering, and hosting local live games.",
  },
  {
    name: "AI-Powered Fitness App",
    details: "A personal trainer app with workout planning and real-time form feedback using computer vision.",
  },
  {
    name: "AI-Driven Investment Insights Platform",
    details: "An API-driven platform for portfolio analysis, signal generation, and backtesting.",
  },
  {
    name: "Black-Scholes Option Pricing App",
    details: "A financial modeling app for option pricing inputs, analytics, and scenario exploration.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="paper-grid min-h-screen">
      <section className="content-surface mx-auto w-full max-w-6xl px-6 py-14">
        <header className="reveal mb-12 border-b border-[var(--border)] pb-8">
          <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Projects</p>
          <h1 className="text-4xl md:text-5xl">Cool things I&apos;ve built</h1>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`reveal space-y-2 border border-[var(--border)] bg-[var(--background)]/94 p-5 ${
                index % 3 === 0 ? "reveal-delay-1" : index % 3 === 1 ? "reveal-delay-2" : "reveal-delay-3"
              }`}
            >
              <h2 className="text-strong text-xl">{project.name}</h2>
              <p className="text-[var(--muted)]">{project.details}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-[var(--foreground)] underline underline-offset-2"
                >
                  Visit project
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
