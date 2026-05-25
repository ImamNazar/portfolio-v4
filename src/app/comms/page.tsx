export const metadata = {
  title: "Comms — Mohamed Imam",
  description: "Email, phone, LinkedIn, GitHub. Quickest way to reach me is email.",
};

const CHANNELS = [
  { tag: "01", label: "EMAIL", value: "mimammnazar@gmail.com", href: "mailto:mimammnazar@gmail.com", primary: true },
  { tag: "02", label: "PHONE", value: "0459 992 281", href: "tel:+61459992281" },
  {
    tag: "03",
    label: "LINKEDIN",
    value: "mohamed-imam-mohamed-nazar",
    href: "https://www.linkedin.com/in/mohamed-imam-mohamed-nazar-92148b19a",
    external: true,
  },
  {
    tag: "04",
    label: "GITHUB",
    value: "github.com/ImamNazar",
    href: "https://github.com/ImamNazar",
    external: true,
  },
];

export default function CommsPage() {
  return (
    <div className="mission-section pt-[120px] pb-20">
      <header className="border-b border-line pb-8 mb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-3 block">
          § 04 · COMMS · CHANNEL_OPEN
        </span>
        <h1 className="font-display font-light text-[clamp(56px,7vw,108px)] leading-[0.95] tracking-[-0.03em] text-ink">
          Have a{" "}
          <em
            className="italic text-acc font-normal"
            style={{ textShadow: "0 0 24px rgba(212, 255, 58, 0.4)" }}
          >
            graduate
          </em>{" "}
          role?
        </h1>
        <p className="font-body text-[20px] leading-[1.55] text-ink max-w-[680px] mt-6">
          I&apos;m looking for graduate roles in Melbourne — IT Support, Service Desk, Frontend
          Development, IT Specialist, or IT Analyst. Open to other Australian cities too.
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-acc mt-4">
          QUICKEST CHANNEL · EMAIL
        </p>
      </header>

      <div className="border border-line bg-bg-card">
        {CHANNELS.map((c, i) => (
          <a
            key={c.tag}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
            className={
              "group grid grid-cols-[60px_120px_1fr_24px] items-center gap-4 px-6 py-5 transition-colors hover:bg-bg-cardHi " +
              (i > 0 ? "border-t border-line" : "")
            }
          >
            <span className="font-mono text-[11px] tracking-[0.12em] text-ink-mute">
              [{c.tag}]
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-acc">
              {c.label}
            </span>
            <span className="text-ink text-[16px] group-hover:text-acc transition-colors break-all">
              {c.value}
            </span>
            <span className="text-ink-mute group-hover:text-acc transition-colors text-right">
              ›
            </span>
          </a>
        ))}
      </div>

      <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mute">
        © {new Date().getFullYear()} MOHAMED IMAM MOHAMED NAZAR · HAND-BUILT IN MELBOURNE
      </p>
    </div>
  );
}
