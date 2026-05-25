"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PAGE_IDS: Record<string, string> = {
  "/": "00_MAIN_MENU",
  "/missions": "02_MISSION_ARCHIVE",
  "/dossier": "01_DOSSIER",
  "/loadout": "03_LOADOUT",
  "/comms": "04_COMMS",
};

function pageId(pathname: string): string {
  if (PAGE_IDS[pathname]) return PAGE_IDS[pathname];
  if (pathname.startsWith("/missions/")) {
    const slug = pathname.replace(/^\/missions\//, "").replace(/\/$/, "");
    return `02_MISSION · ${slug.toUpperCase()}`;
  }
  return pathname.replace(/\//g, "_").toUpperCase() || "00_MAIN";
}

export function HUDOverlay() {
  const pathname = usePathname();
  const id = pageId(pathname);

  // Scroll progress for the thin top-center bar
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(h > 0 ? Math.min(100, Math.max(0, (window.scrollY / h) * 100)) : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Corner brackets */}
      <div className="fixed inset-6 pointer-events-none z-50" aria-hidden>
        <span className="corner-bracket top-0 left-0 w-8 h-8 opacity-55 border-t-[1.5px] border-l-[1.5px]" />
        <span className="corner-bracket top-0 right-0 w-8 h-8 opacity-55 border-t-[1.5px] border-r-[1.5px]" />
        <span className="corner-bracket bottom-0 left-0 w-8 h-8 opacity-55 border-b-[1.5px] border-l-[1.5px]" />
        <span className="corner-bracket bottom-0 right-0 w-8 h-8 opacity-55 border-b-[1.5px] border-r-[1.5px]" />
      </div>

      {/* Scroll progress bar — top center */}
      <div
        className="fixed top-9 left-1/2 -translate-x-1/2 w-[260px] h-px bg-line-mid z-50"
        aria-hidden
      >
        <span
          className="block h-full bg-acc shadow-glow-sm transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* HUD readouts */}
      <div
        className="fixed inset-x-9 inset-y-9 pointer-events-none z-50 font-mono uppercase tracking-[0.05em]"
        style={{ fontSize: 10.5 }}
      >
        {/* TOP LEFT — location */}
        <div className="absolute top-0 left-0 flex flex-col gap-1 pointer-events-auto">
          <span className="text-ink-mute text-[9px]">{"// LOCATION"}</span>
          <span className="text-ink font-medium">-37.8136 · 144.9631</span>
          <span className="text-acc font-medium">MELBOURNE · AU</span>
        </div>

        {/* TOP RIGHT — status */}
        <div className="absolute top-0 right-0 flex flex-col gap-1 items-end pointer-events-auto">
          <span className="text-ink-mute text-[9px]">{"// STATUS"}</span>
          <span className="text-ink font-medium inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-acc shadow-glow-sm animate-pulse" />
            AVAILABLE — 06.2026
          </span>
          <span className="text-signal font-medium">GRADUATE_IT_ROLES</span>
        </div>

        {/* BOTTOM LEFT — page identifier */}
        <div className="absolute bottom-0 left-0 flex flex-col gap-1 pointer-events-auto">
          <span className="text-ink-mute text-[9px]">{"// PAGE"}</span>
          <span className="text-acc font-medium">{id}</span>
        </div>

        {/* BOTTOM RIGHT — system */}
        <div className="absolute bottom-0 right-0 flex flex-col gap-1 items-end pointer-events-auto">
          <span className="text-ink-mute text-[9px]">{"// SYS"}</span>
          <AudioToggle />
        </div>
      </div>
    </>
  );
}

function AudioToggle() {
  const [on, setOn] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-line-mid rounded-full text-ink-mid text-[9.5px] font-mono uppercase tracking-[0.1em] hover:border-acc hover:text-ink transition-colors"
    >
      AUDIO{" "}
      <span className={on ? "text-acc" : "text-warning"}>[{on ? "ON" : "OFF"}]</span>
    </button>
  );
}
