"use client";

import Link from "next/link";
import type { Mission } from "@/types/mission";

const STATUS_LABEL: Record<Mission["status"], string> = {
  featured: "FEATURED",
  live: "LIVE TOOL",
  distinction: "DISTINCTION",
  capstone: "CAPSTONE",
  professional: "PROFESSIONAL",
  archived: "ARCHIVED",
};

export function MissionCard({ mission }: { mission: Mission }) {
  return (
    <Link
      href={`/missions/${mission.slug}`}
      className="group relative bg-bg-card border border-line p-[22px] pb-5 min-h-[270px] flex flex-col transition-all duration-300 ease-out hover:border-acc hover:bg-bg-cardHi hover:-translate-y-1"
    >
      {/* Corner brackets */}
      <span className="absolute -top-px -left-px w-3.5 h-3.5 border-t border-l border-acc opacity-75 transition-all duration-300 group-hover:w-[22px] group-hover:h-[22px] group-hover:opacity-100" />
      <span className="absolute -bottom-px -right-px w-3.5 h-3.5 border-b border-r border-acc opacity-75 transition-all duration-300 group-hover:w-[22px] group-hover:h-[22px] group-hover:opacity-100" />

      {/* Difficulty dots */}
      <div className="absolute top-[22px] right-[22px] flex gap-[3px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={
              i <= mission.difficulty
                ? "w-[7px] h-[7px] bg-acc shadow-glow-sm"
                : "w-[7px] h-[7px] bg-ink-mute opacity-45"
            }
          />
        ))}
      </div>

      {/* Top: number + status */}
      <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-[0.1em] text-ink-mute mb-[18px]">
        <span className="text-acc font-medium">{mission.number}</span>
        <span className="text-ink-mid">
          {mission.year} · {STATUS_LABEL[mission.status]}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-normal text-[22px] leading-[1.15] tracking-[-0.01em] mb-2.5 text-ink">
        {mission.title} <em className="italic text-acc">{mission.titleItalic}</em>
      </h3>

      {/* Summary */}
      <p className="text-[13.5px] leading-[1.55] text-ink-mid mb-4 flex-1 line-clamp-3">
        {mission.summary}
      </p>

      {/* Stats */}
      <div className="flex gap-4 pt-3 border-t border-line mb-3.5">
        {mission.stats.slice(0, 3).map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="font-mono text-[15px] font-medium text-ink">{s.value}</span>
            <span className="font-mono text-[9px] tracking-[0.08em] uppercase text-ink-mute">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {mission.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="font-mono text-[9px] tracking-[0.1em] uppercase px-2 py-[3px] border border-line-mid text-ink-mid"
          >
            {tech.split(/[\s.(]/)[0]}
          </span>
        ))}
      </div>
    </Link>
  );
}
