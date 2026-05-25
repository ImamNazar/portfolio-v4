"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ROUTES = [
  { href: "/", label: "Main Menu", num: "00" },
  { href: "/dossier", label: "Dossier", num: "01" },
  { href: "/missions", label: "Missions", num: "02" },
  { href: "/loadout", label: "Loadout", num: "03" },
  { href: "/comms", label: "Comms", num: "04" },
];

export function NavMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <>
      {/* Toggle button — top center under progress bar */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed top-12 left-1/2 -translate-x-1/2 z-[55] font-mono text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 border border-line-mid bg-bg/80 backdrop-blur-sm text-ink-mid hover:border-acc hover:text-acc transition-colors"
        aria-expanded={open}
      >
        {open ? "[ X ] CLOSE NAV" : "[ + ] NAVIGATION"}
      </button>

      {/* Menu */}
      {open && (
        <div
          className="fixed inset-0 z-[54] bg-bg/85 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <nav
            className="grid gap-3 max-w-[640px] w-[86vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {ROUTES.map((r) => {
              const active = isActive(r.href);
              return (
                <Link
                  key={r.href}
                  href={r.href}
                  onClick={() => setOpen(false)}
                  className={
                    "group relative flex items-baseline justify-between px-7 py-6 border transition-all " +
                    (active
                      ? "border-acc bg-bg-cardHi"
                      : "border-line-mid bg-bg-card hover:border-acc hover:bg-bg-cardHi")
                  }
                >
                  <span className="absolute -top-px -left-px w-3 h-3 border-t border-l border-acc opacity-80" />
                  <span className="absolute -bottom-px -right-px w-3 h-3 border-b border-r border-acc opacity-80" />
                  <span className="flex items-baseline gap-5">
                    <span
                      className={
                        "font-mono text-[12px] tracking-[0.12em] " +
                        (active ? "text-acc" : "text-ink-mute")
                      }
                    >
                      [{r.num}]
                    </span>
                    <span
                      className={
                        "font-display text-[28px] " +
                        (active ? "italic text-acc" : "text-ink group-hover:text-acc")
                      }
                    >
                      {r.label}
                    </span>
                  </span>
                  <span className="font-mono text-[14px] text-ink-mute group-hover:text-acc transition-colors">
                    {active ? "ACTIVE" : "›"}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
