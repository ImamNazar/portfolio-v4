import type { Mission } from "@/types/mission";
import { MissionCard } from "./MissionCard";

export function MissionGrid({ missions }: { missions: Mission[] }) {
  const active = missions.length;
  return (
    <section className="mt-[88px]">
      <div className="flex items-baseline justify-between border-t border-line-mid pt-8 mb-9">
        <h2 className="font-display font-light text-[42px] leading-none tracking-[-0.02em] text-ink">
          Mission <em className="italic text-acc">archive</em>
        </h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-mute">
          § 02 · {String(active).padStart(2, "0")} ACTIVE · 01 ARCHIVED
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
        {missions.map((m) => (
          <MissionCard key={m.slug} mission={m} />
        ))}
      </div>
    </section>
  );
}
