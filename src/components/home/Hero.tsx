"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { CTA } from "@/components/ui/CTA";

// 3D scene is client-only and lazy-loaded
const Centerpiece = dynamic(
  () => import("@/components/three/Centerpiece").then((m) => m.Centerpiece),
  {
    ssr: false,
    loading: () => (
      <div className="w-[380px] h-[380px] flex items-center justify-center">
        <div className="w-24 h-24 border border-acc/40 border-dashed rounded-full animate-spin60" />
      </div>
    ),
  }
);

export function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const strapRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set([eyebrowRef.current, nameRef.current, strapRef.current, ctasRef.current], {
        opacity: 0,
        y: 24,
      });

      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
        .to(nameRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.3")
        .to(strapRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-[60px] items-center min-h-[580px] relative">
      <div className="relative z-[2]">
        <div
          ref={eyebrowRef}
          className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-acc mb-8 before:content-[''] before:w-7 before:h-px before:bg-acc"
        >
          DOSSIER · ED. IV · 2026
        </div>

        <h1
          ref={nameRef}
          className="font-display font-light leading-[0.92] tracking-[-0.04em] text-ink"
          style={{ fontSize: "clamp(72px, 9vw, 132px)" }}
        >
          Mohamed
          <span
            className="block italic font-normal text-acc"
            style={{ textShadow: "0 0 24px rgba(212, 255, 58, 0.4)" }}
          >
            Imam.
          </span>
        </h1>

        <p
          ref={strapRef}
          className="font-body text-lg leading-[1.55] text-ink-mid max-w-[480px] my-8"
        >
          Final-year <span className="text-ink italic">Bachelor of Information Technology</span> at
          RMIT University. Frontend craft, full-stack builds, cloud-deployed infrastructure —
          shipped from Melbourne, Australia.
        </p>

        <div ref={ctasRef} className="flex gap-3.5 flex-wrap">
          <CTA href="/missions" variant="primary">
            ENTER MISSION ARCHIVE
          </CTA>
          <CTA href="/comms" variant="ghost">
            OPEN COMMS
          </CTA>
        </div>
      </div>

      <div className="relative h-[460px] flex items-center justify-center lg:justify-self-end">
        <Centerpiece />
      </div>
    </section>
  );
}
