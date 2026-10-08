"use client";

import { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Zone } from "@/lib/zones";

const TIER_COLOR: Record<string, string> = {
  Title: "#D6402B",
  Feature: "#C8C8CF",
  Detail: "#7A7A84",
};

type Vec = [number, number, number];

const LOT_POS: Record<string, Vec> = {
  T1: [0.05, 0.86, 0.3],
  T2: [0.56, 1.14, 0.02],
  F1: [0.32, 1.34, 0],
  F2: [0.19, 1.2, 0.17],
  F3: [0.62, 0.84, 0.19],
  F4: [0.29, 1.06, 0.15],
  F5: [0.86, 0.76, 0.3],
  D1: [0.42, 0.62, 0.19],
  D2: [-0.56, 0.62, 0],
  D3: [-0.63, 0.4, 0.13],
  D4: [0.99, 0.76, 0.16],
  D5: [0.22, 0.98, 0.05],
};

function Hotspot({
  zone,
  selected,
  onSelect,
}: {
  zone: Zone;
  selected: boolean;
  onSelect: (z: Zone) => void;
}) {
  const pos = LOT_POS[zone.id] ?? [0, 0, 0];
  const color = TIER_COLOR[zone.tier];
  return (
    <mesh position={pos} onClick={() => onSelect(zone)}>
      <sphereGeometry args={[selected ? 0.055 : 0.04, 20, 20]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={selected ? 1.6 : 0.7}
      />
    </mesh>
  );
}

function Bike() {
  const chrome = { color: "#9a9aa2", metalness: 0.9, roughness: 0.25 };
  const body = { color: "#1a1a1e", metalness: 0.6, roughness: 0.4 };
  const dark = { color: "#101013", metalness: 0.3, roughness: 0.7 };

  return (
    <group>
      {/* wheels */}
      <group position={[-0.72, 0.33, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.33, 0.085, 16, 48]} />
          <meshStandardMaterial {...dark} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.06, 24]} />
          <meshStandardMaterial {...chrome} />
        </mesh>
      </group>
      <group position={[0.72, 0.33, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.33, 0.085, 16, 48]} />
          <meshStandardMaterial {...dark} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 0.06, 24]} />
          <meshStandardMaterial {...chrome} />
        </mesh>
      </group>

      {/* front fender */}
      <mesh position={[-0.72, 0.62, 0]} rotation={[0, 0, 0.05]}>
        <boxGeometry args={[0.5, 0.05, 0.16]} />
        <meshStandardMaterial {...body} />
      </mesh>

      {/* fork */}
      <mesh position={[-0.5, 0.55, 0]} rotation={[0, 0, 0.42]}>
        <cylinderGeometry args={[0.025, 0.03, 0.75, 12]} />
        <meshStandardMaterial {...chrome} />
      </mesh>

      {/* handlebar */}
      <mesh position={[-0.34, 0.98, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.014, 0.014, 0.62, 10]} />
        <meshStandardMaterial {...chrome} />
      </mesh>

      {/* tank */}
      <mesh position={[0.03, 0.78, 0]} scale={[0.62, 0.4, 0.5]}>
        <sphereGeometry args={[0.5, 24, 24]} />
        <meshStandardMaterial color="#c8c8cf" metalness={0.85} roughness={0.2} />
      </mesh>

      {/* engine block */}
      <mesh position={[0.05, 0.5, 0]}>
        <boxGeometry args={[0.55, 0.4, 0.3]} />
        <meshStandardMaterial {...body} />
      </mesh>

      {/* exhaust */}
      <mesh position={[0.35, 0.42, 0.22]} rotation={[0, 0, -0.06]}>
        <cylinderGeometry args={[0.045, 0.05, 1.15, 14]} />
        <meshStandardMaterial {...chrome} />
      </mesh>

      {/* seat + cowl */}
      <mesh position={[0.48, 0.76, 0]}>
        <boxGeometry args={[0.42, 0.07, 0.26]} />
        <meshStandardMaterial {...body} />
      </mesh>
      <mesh position={[0.74, 0.79, 0]} rotation={[0, 0, -0.25]}>
        <boxGeometry args={[0.3, 0.14, 0.26]} />
        <meshStandardMaterial {...body} />
      </mesh>

      {/* side covers */}
      <mesh position={[0.42, 0.6, 0.17]}>
        <boxGeometry args={[0.3, 0.14, 0.04]} />
        <meshStandardMaterial {...dark} />
      </mesh>

      {/* swingarm */}
      <mesh position={[0.45, 0.42, 0]} rotation={[0, 0, 0.18]}>
        <boxGeometry args={[0.7, 0.05, 0.08]} />
        <meshStandardMaterial {...chrome} />
      </mesh>

      {/* panniers */}
      <mesh position={[0.86, 0.7, 0.24]}>
        <boxGeometry args={[0.34, 0.34, 0.14]} />
        <meshStandardMaterial {...body} />
      </mesh>

      {/* rider: helmet + torso */}
      <mesh position={[0.26, 1.28, 0]}>
        <sphereGeometry args={[0.15, 24, 24]} />
        <meshStandardMaterial color="#16161a" metalness={0.4} roughness={0.5} />
      </mesh>
      <mesh position={[0.42, 1.0, 0]} rotation={[0, 0, 0.35]}>
        <boxGeometry args={[0.42, 0.5, 0.28]} />
        <meshStandardMaterial {...body} />
      </mesh>
    </group>
  );
}

export default function Lot3D({
  zones,
  onSelect,
}: {
  zones: Zone[];
  onSelect: (z: Zone) => void;
}) {
  const [selected, setSelected] = useState<Zone | null>(null);
  const controls = useRef(null);

  return (
    <Canvas
      camera={{ position: [2.3, 1.4, 2.3], fov: 40 }}
      style={{ height: 420 }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={["#0a0a0b"]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 5, 2]} intensity={1.4} />
      <directionalLight position={[-3, 2, -3]} intensity={0.5} color="#8899aa" />
      <spotLight position={[0, 4, 0]} intensity={0.7} angle={0.7} penumbra={1} />

      <Bike />
      {zones.map((z) => (
        <Hotspot
          key={z.id}
          zone={z}
          selected={selected?.id === z.id}
          onSelect={(zz) => {
            setSelected(zz);
            onSelect(zz);
          }}
        />
      ))}

      <OrbitControls
        ref={controls}
        autoRotate
        autoRotateSpeed={0.8}
        enablePan={false}
        minDistance={1.6}
        maxDistance={6}
        target={[0.2, 0.8, 0]}
      />
    </Canvas>
  );
}
