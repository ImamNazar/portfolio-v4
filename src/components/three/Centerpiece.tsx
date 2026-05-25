"use client";

import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Vector2 } from "three";
import { HoloIcosahedron } from "./HoloIcosahedron";

export function Centerpiece() {
  return (
    <div className="relative w-[380px] h-[380px] flex items-center justify-center">
      {/* Decorative rotating rings (CSS) */}
      <div
        className="absolute inset-0 rounded-full border border-acc/30 border-dashed animate-spin60"
        aria-hidden
      />
      <div
        className="absolute inset-10 rounded-full border border-signal/25 animate-spin40r"
        aria-hidden
      />
      <div
        className="absolute inset-20 rounded-full border border-ink-mute/40 animate-spin90"
        aria-hidden
        style={{ borderWidth: 0.5 }}
      />

      {/* Corner readouts */}
      <span className="absolute -top-1 -left-2 font-mono text-[9px] uppercase tracking-[0.18em] text-signal/85 whitespace-nowrap">
        <span className="text-ink-mute">[ </span>3D · R3F<span className="text-ink-mute"> ]</span>
      </span>
      <span className="absolute -top-1 -right-2 font-mono text-[9px] uppercase tracking-[0.18em] text-signal/85 whitespace-nowrap">
        <span className="text-ink-mute">[ </span>SHADER · GLSL
        <span className="text-ink-mute"> ]</span>
      </span>
      <span className="absolute -bottom-1 -left-2 font-mono text-[9px] uppercase tracking-[0.18em] text-signal/85 whitespace-nowrap">
        <span className="text-ink-mute">[ </span>ROT · 0.12 RAD/S
        <span className="text-ink-mute"> ]</span>
      </span>
      <span className="absolute -bottom-1 -right-2 font-mono text-[9px] uppercase tracking-[0.18em] text-signal/85 whitespace-nowrap">
        <span className="text-ink-mute">[ </span>BLOOM · ON
        <span className="text-ink-mute"> ]</span>
      </span>

      {/* The actual canvas */}
      <div className="absolute inset-12 z-10">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#d4ff3a" />
          <pointLight position={[-5, -3, -5]} intensity={0.8} color="#5fffea" />
          <HoloIcosahedron />
          <EffectComposer>
            <Bloom
              intensity={1.2}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <ChromaticAberration
              blendFunction={BlendFunction.NORMAL}
              offset={new Vector2(0.0015, 0.0015)}
              modulationOffset={0}
              radialModulation={false}
            />
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
}
