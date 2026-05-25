"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const BOOT_LINES = [
  "system://initializing_dossier",
  "[OK] biometric_match › mohamed_imam_mohamed_nazar",
  "[OK] location_lock › -37.8136, 144.9631 · melbourne_au",
  "[OK] availability › jun_2026",
  "[OK] dossier_load › 06 active · 01 archived",
  "[OK] hud_overlay › online",
  "boot_complete",
];

export function BootSequence() {
  const [done, setDone] = useState(true); // start true to avoid SSR flash
  const [lines, setLines] = useState<string[]>([]);
  const [counter, setCounter] = useState("000");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("imam:booted");

    if (reduce || seen === "1") {
      setDone(true);
      return;
    }

    sessionStorage.setItem("imam:booted", "1");
    setDone(false);

    // Counter 000 → 100
    let n = 0;
    const counterTick = window.setInterval(() => {
      n = Math.min(100, n + 4 + Math.floor(Math.random() * 7));
      setCounter(String(n).padStart(3, "0"));
      if (n >= 100) window.clearInterval(counterTick);
    }, 40);

    // Stream lines
    let i = 0;
    const lineTick = window.setInterval(() => {
      setLines((prev) => [...prev, BOOT_LINES[i]]);
      i++;
      if (i >= BOOT_LINES.length) window.clearInterval(lineTick);
    }, 180);

    // Finish + fade
    const finishTimer = window.setTimeout(() => {
      const el = rootRef.current;
      if (el) {
        gsap.to(el, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => setDone(true),
        });
      } else {
        setDone(true);
      }
    }, 2200);

    return () => {
      window.clearInterval(counterTick);
      window.clearInterval(lineTick);
      window.clearTimeout(finishTimer);
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="boot-overlay font-mono text-ink text-sm"
      aria-hidden
    >
      <div className="w-[min(620px,86vw)] px-6">
        <div className="flex items-baseline justify-between mb-6">
          <span className="text-acc tracking-[0.18em] uppercase text-xs">
            BOOT · MOHAMED_IMAM · V4
          </span>
          <span className="text-acc font-medium tabular-nums">{counter}</span>
        </div>

        <div className="h-px bg-line-mid mb-6 relative">
          <span
            className="absolute left-0 top-0 h-full bg-acc shadow-glow-sm transition-[width] duration-100"
            style={{ width: `${parseInt(counter, 10)}%` }}
          />
        </div>

        <div className="space-y-1.5 text-[11px] leading-relaxed">
          {lines.map((l, idx) => {
            const isOk = l.startsWith("[OK]");
            const isComplete = l === "boot_complete";
            return (
              <div key={idx} className="opacity-0 animate-[fadein_.2s_ease-out_forwards]">
                {isOk ? (
                  <>
                    <span className="text-signal">[OK]</span>
                    <span className="text-ink-mid"> {l.slice(4)}</span>
                  </>
                ) : isComplete ? (
                  <span className="text-acc">› {l}</span>
                ) : (
                  <span className="text-ink-mid">› {l}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadein {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
