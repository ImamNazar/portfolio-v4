"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import type { Group, Mesh } from "three";

export function HoloIcosahedron() {
  const group = useRef<Group>(null);
  const outer = useRef<Mesh>(null);
  const inner = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.12;
      group.current.rotation.x += delta * 0.04;
    }
    if (outer.current) {
      outer.current.rotation.z -= delta * 0.18;
    }
    if (inner.current) {
      inner.current.rotation.z += delta * 0.5;
      inner.current.rotation.y -= delta * 0.3;
    }

    // Subtle cursor parallax
    if (group.current) {
      const { x, y } = state.mouse;
      group.current.position.x += (x * 0.15 - group.current.position.x) * 0.05;
      group.current.position.y += (y * 0.1 - group.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={group}>
      {/* Outer wireframe icosahedron */}
      <Icosahedron ref={outer} args={[1.4, 0]}>
        <meshBasicMaterial color="#d4ff3a" wireframe transparent opacity={0.85} />
      </Icosahedron>

      {/* Inner distorted solid form, emissive */}
      <Icosahedron ref={inner} args={[0.85, 1]}>
        <MeshDistortMaterial
          color="#0a0907"
          emissive="#d4ff3a"
          emissiveIntensity={0.5}
          distort={0.35}
          speed={1.4}
          roughness={0.4}
          metalness={0.6}
        />
      </Icosahedron>

      {/* Inner cyan accent */}
      <Icosahedron args={[0.55, 0]}>
        <meshBasicMaterial color="#5fffea" wireframe transparent opacity={0.55} />
      </Icosahedron>

      {/* Core pulse */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#d4ff3a" />
      </mesh>
    </group>
  );
}
