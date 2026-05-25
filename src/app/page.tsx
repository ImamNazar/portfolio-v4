import { Hero } from "@/components/home/Hero";
import { MissionGrid } from "@/components/home/MissionGrid";
import { DiagnosticLog } from "@/components/home/DiagnosticLog";
import { getHomeMissions } from "@/lib/missions";

export default function HomePage() {
  const homeMissions = getHomeMissions();
  return (
    <div className="mission-section pt-[110px] pb-20">
      <Hero />
      <MissionGrid missions={homeMissions} />
      <DiagnosticLog />
    </div>
  );
}
