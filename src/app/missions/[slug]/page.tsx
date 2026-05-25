import Link from "next/link";
import { notFound } from "next/navigation";
import { missions, getMission } from "@/lib/missions";
import { CTA } from "@/components/ui/CTA";

// Required for static export with dynamic [slug]
export function generateStaticParams() {
  return missions.map((m) => ({ slug: m.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const mission = getMission(slug);
  if (!mission) return { title: "Mission not found" };
  return {
    title: `${mission.title} ${mission.titleItalic} — Mission Briefing · Mohamed Imam`,
    description: mission.summary,
  };
}

export default async function MissionPage({ params }: { params: Params }) {
  const { slug } = await params;
  const mission = getMission(slug);
  if (!mission) notFound();

  return (
    <article className="mission-section pt-[120px] pb-20">
      {/* Classified-style header */}
      <header className="border-t border-b border-line py-6 mb-12">
        <div className="flex items-center justify-between font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-mute mb-5">
          <span className="text-acc font-medium">{mission.number} · MISSION BRIEFING</span>
          <span>
            CLEARANCE · <span className="text-signal">PUBLIC</span>
          </span>
        </div>

        <h1 className="font-display font-light leading-[0.95] tracking-[-0.03em] text-ink text-[clamp(56px,7vw,108px)] mb-6">
          {mission.title}{" "}
          <em
            className="italic text-acc font-normal"
            style={{ textShadow: "0 0 24px rgba(212, 255, 58, 0.4)" }}
          >
            {mission.titleItalic}
          </em>
        </h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-mid">
          <span>{mission.year}</span>
          <span className="text-ink-mute">/</span>
          <span>{mission.context}</span>
          <span className="text-ink-mute">/</span>
          <span className="text-acc">
            DIFFICULTY:{" "}
            {Array(mission.difficulty).fill("●").join("")}
            {Array(5 - mission.difficulty).fill("○").join("")}
          </span>
        </div>
      </header>

      {/* Summary */}
      <p className="font-body text-[20px] leading-[1.55] text-ink max-w-[820px] mb-16">
        {mission.summary}
      </p>

      {/* Problem + Approach two-column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-4">
            {"// OBJECTIVE"}
          </h2>
          <p className="font-body text-[17px] leading-[1.65] text-ink-soft">{mission.problem}</p>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-4">
            {"// APPROACH"}
          </h2>
          <p className="font-body text-[17px] leading-[1.65] text-ink-soft">{mission.approach}</p>
        </div>
      </div>

      {/* Execution steps */}
      <section className="mb-16">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-6">
          {"// EXECUTION"}
        </h2>
        <ol className="space-y-5">
          {mission.steps.map((step, i) => (
            <li
              key={step.key}
              className="grid grid-cols-[44px_1fr] md:grid-cols-[60px_180px_1fr] gap-4 md:gap-6 py-5 border-t border-line"
            >
              <span className="font-mono text-[12px] text-ink-mute pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-mono text-[13px] uppercase tracking-[0.1em] text-ink col-span-1 md:col-auto">
                {step.key}
              </h3>
              <p className="font-body text-[16px] leading-[1.6] text-ink-soft col-span-2 md:col-auto">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Lesson / debrief */}
      {mission.lesson && (
        <section className="mb-16 p-7 border border-line bg-bg-soft relative">
          <span className="corner-bracket top-0 left-0 w-4 h-4 border-t border-l opacity-100" />
          <span className="corner-bracket bottom-0 right-0 w-4 h-4 border-b border-r opacity-100" />
          <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-4">
            {"// DEBRIEF — "}{mission.lesson.title.toUpperCase()}
          </h2>
          <p className="font-body text-[17px] leading-[1.65] text-ink">{mission.lesson.body}</p>
        </section>
      )}

      {/* Stats */}
      {mission.stats.length > 0 && (
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-line mb-16 border border-line">
          {mission.stats.map((s) => (
            <div key={s.label} className="bg-bg-card p-5">
              <div className="font-mono text-[28px] font-medium text-acc leading-none mb-2">
                {s.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute">
                {s.label}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Stack */}
      <section className="mb-12">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-4">
          {"// LOADOUT"}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {mission.stack.map((tech) => (
            <li
              key={tech}
              className="font-mono text-[11px] uppercase tracking-[0.1em] px-3 py-2 border border-line-mid text-ink"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Links */}
      {mission.links && mission.links.length > 0 && (
        <section className="flex flex-wrap gap-3 mb-12">
          {mission.links.map((link) => (
            <CTA
              key={link.href}
              href={link.href}
              external
              variant={link.primary ? "primary" : "ghost"}
            >
              {link.label}
            </CTA>
          ))}
        </section>
      )}

      {/* Back to archive */}
      <div className="pt-8 border-t border-line">
        <Link
          href="/missions"
          className="inline-flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink-mid hover:text-acc transition-colors"
        >
          <span className="text-acc">‹</span> RETURN TO MISSION ARCHIVE
        </Link>
      </div>
    </article>
  );
}
