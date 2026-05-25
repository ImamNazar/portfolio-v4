export const metadata = {
  title: "Loadout — Mohamed Imam",
  description: "The stack I reach for, organised by what each tool actually does.",
};

const CATEGORIES = [
  {
    id: "/01",
    title: "Frontend",
    note: "Where the user actually lives.",
    items: [
      "JavaScript (ES6+)",
      "React.js · React Router",
      "Next.js · TypeScript",
      "HTML5 · CSS3 · Tailwind",
      "Responsive design",
      "Wix Studio / Velo",
    ],
  },
  {
    id: "/02",
    title: "Backend & APIs",
    note: "Server-side logic, integrations, the wiring.",
    items: [
      "Node.js · Express",
      "ASP.NET",
      "PHP",
      "REST API integration",
      "async / await · Promises",
    ],
  },
  {
    id: "/03",
    title: "Databases",
    note: "Schema design, queries, keeping data honest.",
    items: [
      "MySQL",
      "Relational schema design",
      "MS Access",
      "MongoDB (basic)",
      "PostgreSQL (intro)",
    ],
  },
  {
    id: "/04",
    title: "Cloud & DevOps",
    note: "Where the HD in Cloud Foundations lives.",
    items: ["AWS · EC2", "Docker", "Terraform", "Ansible", "GitHub Actions · CI/CD"],
    accent: true,
  },
  {
    id: "/05",
    title: "Testing & QA",
    note: "Catching things before users do.",
    items: ["JUnit", "Selenium", "JMeter (load)", "Cucumber (BDD)", "Static analysis"],
  },
  {
    id: "/06",
    title: "IT Support",
    note: "1.5+ years of doing this for a living.",
    items: ["Hardware troubleshooting", "POS systems", "Windows OS", "Network basics", "End-user training"],
  },
  {
    id: "/07",
    title: "Languages",
    note: "What I can read, write, and reason in.",
    items: ["JavaScript · TypeScript", "Java", "C# · C++", "PHP", "SQL · Python (basic)"],
  },
  {
    id: "/08",
    title: "Tools",
    note: "The daily-driver software.",
    items: ["Git · GitHub", "VS Code", "Figma · Tokens Studio", "Microsoft Office", "Postman"],
  },
];

export default function LoadoutPage() {
  return (
    <div className="mission-section pt-[120px] pb-20">
      <header className="border-b border-line pb-8 mb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-3 block">
          § 03 · LOADOUT · COMBAT_READY
        </span>
        <h1 className="font-display font-light text-[clamp(56px,7vw,108px)] leading-[0.95] tracking-[-0.03em] text-ink">
          The{" "}
          <em
            className="italic text-acc font-normal"
            style={{ textShadow: "0 0 24px rgba(212, 255, 58, 0.4)" }}
          >
            tools
          </em>{" "}
          I reach for.
        </h1>
        <p className="font-body text-lg leading-[1.55] text-ink-mid max-w-[640px] mt-6">
          Organised by what each thing actually does — not by hype.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[18px]">
        {CATEGORIES.map((c) => (
          <article
            key={c.id}
            className={
              "relative p-5 border bg-bg-card transition-colors " +
              (c.accent ? "border-acc/40 hover:border-acc" : "border-line hover:border-line-mid")
            }
          >
            <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-acc opacity-70" />
            <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-acc opacity-70" />

            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-acc mb-3">
              {c.id}
            </div>
            <h3 className="font-display text-[22px] font-normal text-ink mb-1.5">{c.title}</h3>
            <p className="text-[13px] leading-[1.55] text-ink-mid mb-4">{c.note}</p>

            <ul className="space-y-1.5">
              {c.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-[12px] text-ink-soft border-t border-line pt-1.5 first:border-t-0 first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
