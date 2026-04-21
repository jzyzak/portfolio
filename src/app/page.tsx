const workExperience = [
  {
    company: "Optiver",
    period: "March 2026",
    location: "Chicago",
    role: "FutureFocus",
    highlights: [
      "Selected for a competitive quant trading program focused on market making, options theory, and trading strategy",
      "Developed and tested trading strategies under simulated market conditions, optimizing for risk-adjusted returns",
    ],
  },
  {
    company: "Alexandria AI",
    period: "Sept. 2025 - Present",
    location: "Remote",
    role: "Builder",
    highlights: [
      "Built an AI research OS with document search, workflow tracking, and reasoning across Gmail, Drive, and Slack",
      "Developed full-stack system (Next.js, FastAPI, OpenSearch, DynamoDB/S3, Firebase Auth) indexing 10k+ documents",
    ],
  },
  {
    company: "Artemis",
    period: "Dec. 2025 - Jan. 2026",
    location: "Remote",
    role: "AI/Software Engineer",
    highlights: [
      "Built AI-powered Microsoft 365 identity/log ingestion connectors (FastAPI, Microsoft Graph, S3) for AI-native SIEM",
      "Mapped logs to OCFS and shipped AI-assisted case analysis to accelerate incident triage by 30%",
    ],
  },
  {
    company: "The Coca-Cola Company",
    period: "May 2025 - Aug. 2025",
    location: "Atlanta, GA",
    role: "Marketing Technologies Intern",
    highlights: [
      "Designed Azure AD B2C identity solution with Microsoft to secure authentication for global enterprise apps",
      "Contributed to internal analytics platform supporting 5+ enterprise features",
    ],
  },
  {
    company: "Series",
    period: "July 2025 - Aug. 2025",
    location: "New York, NY",
    role: "AI/Software Engineer",
    highlights: [
      "Shipped gamified referral leaderboard and automated LinkedIn sourcing pipeline",
      "Scaled backend services supporting 200K+ profiles and optimized agent workflows to cut latency by 20%",
    ],
  },
];

export default function Home() {
  return (
    <div className="paper-grid min-h-screen">
      <section className="content-surface mx-auto w-full max-w-4xl px-6 py-14">
        <header className="reveal">
          <h1 className="text-strong mb-3 text-4xl md:text-5xl">Josh Zyzak</h1>
          <p className="max-w-3xl text-base text-[var(--muted)] md:text-lg">
            Sophomore EECS student @ Harvard - AI researcher - builder/founder - previously top 500 competitive Fortnite NAC - currently sidequesting + building proactive agents for consumer healthcare + Spectre Capital
          </p>
        </header>

        <div className="reveal reveal-delay-1 mb-8 mt-14 border-b border-[var(--border)] pb-6">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Home</p>
          <h2 className="text-strong text-2xl md:text-3xl">Work experience timeline</h2>
        </div>

        <div className="relative pl-6">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-[var(--border)]" />
          <div className="space-y-6">
            {workExperience.map((item, index) => (
              <article
                key={`${item.company}-${item.period}`}
                className={`reveal relative border border-[var(--border)] bg-[var(--background)]/94 p-4 ${index % 2 === 0 ? "reveal-delay-2" : "reveal-delay-3"}`}
              >
                <div className="absolute -left-[30px] top-5 h-2.5 w-2.5 rounded-full border border-[var(--foreground)] bg-[var(--background)]" />
                <div className="mb-1 flex items-start justify-between gap-6">
                  <h2 className="text-base md:text-lg">{item.company}</h2>
                  <p className="text-base text-[var(--foreground)] md:text-lg">{item.period}</p>
                </div>
                <div className="mb-2 flex items-start justify-between gap-6">
                  <p className="text-base italic text-[var(--foreground)] md:text-lg">{item.role}</p>
                  <p className="text-base italic text-[var(--foreground)] md:text-lg">{item.location}</p>
                </div>
                <ul className="list-disc space-y-1 pl-5 text-base text-[var(--muted)] md:text-lg">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
