export function DiagnosticLog() {
  return (
    <div className="mt-12 p-5 border border-line bg-bg-soft font-mono text-[10.5px] leading-[1.85] text-ink-mute tracking-[0.04em]">
      <div className="text-ink-mid mb-2 text-[10px] tracking-[0.15em] uppercase border-b border-line pb-2">
        {"// SYSTEM LOG · MAIN_MENU · LAST 6 ENTRIES"}
      </div>
      <div>
        <span className="text-signal">[OK]</span> system://boot_complete ·{" "}
        <span className="text-acc">latency 1.42s</span>
      </div>
      <div>
        <span className="text-signal">[OK]</span> biometric_match › mohamed_imam_mohamed_nazar
      </div>
      <div>
        <span className="text-signal">[OK]</span> location_lock ·{" "}
        <span className="text-acc">-37.8136, 144.9631 · melbourne_au</span>
      </div>
      <div>
        <span className="text-signal">[OK]</span> availability ·{" "}
        <span className="text-acc">
          jun_2026 · graduate_it_roles · service_desk · frontend_dev
        </span>
      </div>
      <div>
        <span className="text-signal">[OK]</span> mission_count · 06 active · 01 archived
      </div>
      <div>
        &gt; awaiting input
        <span className="inline-block w-[7px] h-[11px] bg-acc align-middle ml-1 animate-blink" />
      </div>
    </div>
  );
}
