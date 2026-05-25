export const metadata = {
  title: "Dossier — Mohamed Imam",
  description: "Who I am, where I&apos;ve studied, what I work in.",
};

const VITALS = [
  { k: "Currently", v: "Final-year BIT, RMIT University" },
  { k: "Graduating", v: "June 2026" },
  { k: "Looking for", v: "Graduate IT roles, Melbourne" },
  { k: "Work rights", v: "Full, from June 2026" },
  { k: "Languages", v: "English · Tamil · Sinhala" },
  { k: "Coffee", v: "Flat white, two sugars" },
];

const STATS = [
  { v: "06", l: "Projects shipped" },
  { v: "08", l: "Languages spoken (programming)" },
  { v: "03", l: "High Distinctions at RMIT" },
  { v: "18", l: "Months of pro IT experience" },
];

export default function DossierPage() {
  return (
    <div className="mission-section pt-[120px] pb-20">
      <header className="border-b border-line pb-8 mb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-3 block">
          § 01 · DOSSIER · CLASSIFIED: PUBLIC
        </span>
        <h1 className="font-display font-light text-[clamp(56px,7vw,108px)] leading-[0.95] tracking-[-0.03em] text-ink">
          The{" "}
          <em
            className="italic text-acc font-normal"
            style={{ textShadow: "0 0 24px rgba(212, 255, 58, 0.4)" }}
          >
            person
          </em>{" "}
          behind the portfolio.
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 mb-20">
        <div className="space-y-6 max-w-[680px]">
          <p className="font-body text-[18px] leading-[1.65] text-ink-soft">
            I&apos;m a 25-year-old developer based in Melbourne, finishing my{" "}
            <span className="text-ink italic">Bachelor of Information Technology</span> at RMIT
            University in June 2026. Before that I completed a Higher Diploma in Computing &amp;
            Software Engineering and spent over a year working as an IT Specialist for a small
            trading business — fixing the things that broke and building the things that didn&apos;t yet
            exist.
          </p>
          <p className="font-body text-[18px] leading-[1.65] text-ink-soft">
            My work sits at the intersection of frontend craft and real-world IT operations. I&apos;ve
            shipped full-stack web apps with live REST API integrations, set up CI/CD pipelines
            with GitHub Actions, automated cloud deployments with Terraform and Ansible on AWS, and
            supported end-users through hardware, POS, and network issues.
          </p>
          <p className="font-body text-[18px] leading-[1.65] text-ink-soft">
            What I care about most: software that handles its own edge cases, interfaces that
            respect the reader, and work I&apos;d be willing to put my name on.
          </p>
        </div>

        <aside>
          <div className="border border-line bg-bg-card p-6 mb-5 relative">
            <span className="corner-bracket top-0 left-0 w-3 h-3 border-t border-l opacity-100" />
            <span className="corner-bracket bottom-0 right-0 w-3 h-3 border-b border-r opacity-100" />
            <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-acc mb-4">
              {"// VITAL STATS"}
            </h3>
            <dl className="space-y-3">
              {VITALS.map((row) => (
                <div key={row.k} className="grid grid-cols-[110px_1fr] text-[13px]">
                  <dt className="font-mono uppercase tracking-[0.08em] text-ink-mute text-[11px]">
                    {row.k}
                  </dt>
                  <dd className="text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-px bg-line border border-line">
            {STATS.map((s) => (
              <div key={s.l} className="bg-bg-card p-4">
                <div className="font-mono text-[26px] font-medium text-acc leading-none mb-1.5">
                  {s.v}
                </div>
                <div className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-ink-mute leading-tight">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Education */}
      <section>
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-8 pb-3 border-b border-line">
          {"// EDUCATION"}
        </h2>

        <article className="mb-10">
          <header className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display text-[26px] font-normal text-ink">
                Bachelor of Information Technology
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mid mt-1">
                RMIT University · Melbourne, Australia
              </p>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-acc">
              JUL 2023 — JUN 2026 · EXPECTED
            </span>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-8 gap-y-3 ml-1">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[42px] font-light text-acc leading-none">HD</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
                High Distinction
              </span>
            </div>
            <ul className="text-ink-soft text-[15px] leading-[1.7] self-center">
              <li>Cloud Foundations</li>
              <li>Introduction to Cyber Security</li>
              <li>Innovation Ecosystem &amp; Future of Work</li>
            </ul>

            <div className="flex items-baseline gap-3 mt-3">
              <span className="font-display text-[42px] font-light text-ink leading-none">DI</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
                Distinction
              </span>
            </div>
            <ul className="text-ink-soft text-[15px] leading-[1.7] self-center mt-3">
              <li>Systems Deployment &amp; Operations (DevOps)</li>
              <li>Essentials of IT &amp; Ethics</li>
            </ul>
          </div>
        </article>

        <article className="pt-6 border-t border-line">
          <header className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
            <div>
              <h3 className="font-display text-[26px] font-normal text-ink">
                Higher Diploma in Computing &amp; Software Engineering
              </h3>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mid mt-1">
                ICBT Campus · Sri Lanka
              </p>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mid">
              JAN 2020 — SEP 2022
            </span>
          </header>
          <p className="text-ink-soft text-[15px] leading-[1.7] max-w-[820px]">
            Capstone project: MkCare hospital management web application. Member of the Rotaract
            Club of ICBT.
          </p>
        </article>
      </section>
    </div>
  );
}
