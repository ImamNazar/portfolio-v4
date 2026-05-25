import { missions } from "@/lib/missions";
import { MissionCard } from "@/components/home/MissionCard";

export const metadata = {
  title: "Mission Archive — Mohamed Imam",
  description: "Every project, every case study, every line of code I&apos;ve shipped.",
};

export default function MissionsPage() {
  return (
    <div className="mission-section pt-[120px] pb-20">
      <header className="border-b border-line pb-8 mb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-3 block">
          § 02 · MISSION ARCHIVE
        </span>
        <h1 className="font-display font-light text-[clamp(56px,7vw,108px)] leading-[0.95] tracking-[-0.03em] text-ink">
          Seven things I&apos;ve{" "}
          <em
            className="italic text-acc font-normal"
            style={{ textShadow: "0 0 24px rgba(212, 255, 58, 0.4)" }}
          >
            built
          </em>
          .
        </h1>
        <p className="font-body text-lg leading-[1.55] text-ink-mid max-w-[640px] mt-6">
          Most recent first. Three featured case studies — one a live tool you can use right now —
          followed by four project briefings.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {missions.map((m) => (
          <MissionCard key={m.slug} mission={m} />
        ))}
      </div>
    </div>
  );
}
