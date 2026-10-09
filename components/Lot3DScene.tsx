"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Sparkles } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import * as THREE from "three";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
const MODEL_URL = `${BP}/models/motorcycle-r2.glb`;

export type Spot = {
  /** center in model space (meters, bike grounded at y=0, front = +Z) */
  p: [number, number, number];
  /** outward normal */
  n: [number, number, number];
  /** mirror across x=0 for symmetric pairs */
  mirror?: boolean;
  /** decal size in meters (true lot size) */
  w: number;
  h: number;
};

/**
 * Hotspots computed from the model's real geometry
 * (tank width 0.48, seat 0.36, fork slider outer face ±0.149, ...).
 */
export const SPOTS: Record<string, Spot> = {
  T1: { p: [0.245, 0.87, 0.16], n: [1, 0, 0], mirror: true, w: 0.12, h: 0.04 }, // tank flanks
  F3: { p: [0.185, 0.83, -0.38], n: [1, 0, 0], mirror: true, w: 0.10, h: 0.04 }, // seat cowl flanks
  D1: { p: [0.228, 0.72, -0.12], n: [1, 0, 0], mirror: true, w: 0.085, h: 0.03 }, // side covers
  D2: { p: [0.068, 0.66, 0.5], n: [1, 0, 0], mirror: true, w: 0.10, h: 0.035 }, // front mudguard tail
  D3: { p: [0.152, 0.50, 0.68], n: [1, 0, 0], mirror: true, w: 0.085, h: 0.03 }, // fork sliders
};

function quatFromNormal(n: [number, number, number]) {
  const q = new THREE.Quaternion();
  q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...n).normalize());
  return q;
}

function spotPlaces(spot: Spot): Spot[] {
  if (!spot.mirror) return [spot];
  return [
    spot,
    { ...spot, p: [-spot.p[0], spot.p[1], spot.p[2]], n: [-spot.n[0], spot.n[1], spot.n[2]] },
  ];
}

/** Which lot owns the point the sponsor just tapped on the bike? */
function nearestSpotId(point: THREE.Vector3): string | null {
  let best: string | null = null;
  let bd = 0.32; // generous grab radius, in meters
  for (const [id, s] of Object.entries(SPOTS)) {
    for (const pl of spotPlaces(s)) {
      const d = Math.hypot(point.x - pl.p[0], point.y - pl.p[1], point.z - pl.p[2]);
      if (d < bd) {
        bd = d;
        best = id;
      }
    }
  }
  return best;
}

type BikeStatus = { status: "loading" | "loaded" | "error"; message?: string };

function prep(scene: THREE.Object3D): THREE.Object3D {
  const m = scene.clone(true);
  const box = new THREE.Box3().setFromObject(m);
  const c = box.getCenter(new THREE.Vector3());
  m.position.set(-c.x, 0, -c.z);
  m.traverse((o) => {
    const mesh = o as unknown as {
      isMesh?: boolean;
      material?: THREE.Material | THREE.Material[];
      castShadow?: boolean;
    };
    if (!mesh.isMesh) return;
    mesh.castShadow = true;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const mat of mats) {
      const std = mat as THREE.MeshStandardMaterial;
      // Mr. Clean treatment: the factory "red" body panels become bright chrome paint
      if (std.name === "red") {
        std.color.set(0xe9edf2);
        std.metalness = 0.45;
        std.roughness = 0.28;
        std.envMapIntensity = 1.6;
      }
      if (std.name === "chrome" || std.name === "steel") {
        std.envMapIntensity = 1.6;
      }
      if (std.name === "lamp") {
        std.emissive = new THREE.Color(0xbfd4ff);
        std.emissiveIntensity = 0.7;
      }
      if (std.name === "tail") {
        std.emissive = new THREE.Color(0xff2a1a);
        std.emissiveIntensity = 0.8;
      }
    }
  });
  return m;
}

function Bike({ onPick }: { onPick?: (id: string) => void }) {
  const [state, setState] = useState<{ obj?: THREE.Object3D; err?: string }>({});
  useEffect(() => {
    let alive = true;
    const report = (st: BikeStatus) =>
      window.dispatchEvent(new CustomEvent("cy-bike-status", { detail: st }));
    report({ status: "loading" });
    new GLTFLoader().load(
      MODEL_URL,
      (gltf) => {
        if (!alive) return;
        try {
          setState({ obj: prep(gltf.scene) });
          report({ status: "loaded" });
        } catch (e) {
          const message = e instanceof Error ? e.message : String(e);
          setState({ err: message });
          report({ status: "error", message });
        }
      },
      undefined,
      (e) => {
        if (!alive) return;
        const message = (e as Error)?.message || String(e);
        setState({ err: message });
        report({ status: "error", message });
      }
    );
    return () => {
      alive = false;
    };
  }, []);

  // Tap the machine itself: raycast hit → nearest lot. Drags never trigger.
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    if (e.delta > 6) return;
    const id = nearestSpotId(e.point);
    if (id) onPick?.(id);
  };

  return state.obj ? <primitive object={state.obj} onClick={handleClick} /> : null;
}

function Hotspot({
  spot,
  active,
  onClick,
}: {
  spot: Spot;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <>
      {spotPlaces(spot).map((s, i) => {
        const pos = new THREE.Vector3(...s.p).add(new THREE.Vector3(...s.n).multiplyScalar(0.015));
        const color = active ? "#D6402B" : "#e8e8ee";
        return (
          <mesh key={i} position={pos} onClick={onClick}>
            <sphereGeometry args={[active ? 0.03 : 0.022, 16, 16]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={active ? 1.6 : 0.7}
            />
          </mesh>
        );
      })}
    </>
  );
}

function Decal({ url, spot }: { url: string; spot: Spot }) {
  const tex = useLoader(THREE.TextureLoader, url);
  tex.colorSpace = THREE.SRGBColorSpace;
  return (
    <>
      {spotPlaces(spot).map((s, i) => (
        <mesh
          key={i}
          position={new THREE.Vector3(...s.p).add(new THREE.Vector3(...s.n).multiplyScalar(0.004))}
          quaternion={quatFromNormal(s.n)}
        >
          <planeGeometry args={[spot.w, spot.h]} />
          <meshBasicMaterial map={tex} transparent depthWrite={false} />
        </mesh>
      ))}
    </>
  );
}

/** Pulsing red halo marking the selected lot's exact placement */
function Halo({ spot }: { spot: Spot }) {
  const mats = useRef<THREE.MeshBasicMaterial[]>([]);
  useFrame(({ clock }) => {
    const o = 0.1 + 0.09 * (0.5 + 0.5 * Math.sin(clock.getElapsedTime() * 3.2));
    mats.current.forEach((m) => {
      if (m) m.opacity = o;
    });
  });
  return (
    <>
      {spotPlaces(spot).map((s, i) => (
        <mesh
          key={i}
          position={new THREE.Vector3(...s.p).add(new THREE.Vector3(...s.n).multiplyScalar(0.006))}
          quaternion={quatFromNormal(s.n)}
        >
          <planeGeometry args={[spot.w + 0.035, spot.h + 0.035]} />
          <meshBasicMaterial
            ref={(m) => {
              if (m) mats.current[i] = m;
            }}
            color="#D6402B"
            transparent
            opacity={0.15}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  );
}

export default function Lot3DScene({
  selected,
  logoUrl,
  logoAll,
  onSelect,
}: {
  selected: string;
  logoUrl: string | null;
  logoAll: boolean;
  onSelect: (id: string) => void;
}) {
  const envOnCreated = ({
    gl,
    scene,
  }: {
    gl: THREE.WebGLRenderer;
    scene: THREE.Scene;
  }) => {
    try {
      const pmrem = new THREE.PMREMGenerator(gl);
      const env = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = env.texture;
      pmrem.dispose();
    } catch {
      // env is polish, not critical — lights carry the scene
    }
  };

  const spot = SPOTS[selected] ?? SPOTS.T1;

  return (
    <Canvas
      camera={{ position: [2.4, 1.35, 2.9], fov: 32 }}
      style={{ height: 460 }}
      shadows
      onCreated={envOnCreated}
    >
      <color attach="background" args={["#0a0a0b"]} />
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 3]} intensity={1.4} castShadow />
      <directionalLight position={[-4, 2, -4]} intensity={0.6} color="#99aabb" />
      <directionalLight position={[0, 3, -6]} intensity={1.0} color="#aabbdd" />

      <Suspense fallback={null}>
        <Bike onPick={onSelect} />
        {logoUrl &&
          (logoAll ? (
            Object.entries(SPOTS).map(([id, s]) => (
              <Decal key={id} url={logoUrl} spot={s} />
            ))
          ) : (
            <Decal url={logoUrl} spot={spot} />
          ))}
      </Suspense>

      <Halo spot={spot} />

      {Object.entries(SPOTS).map(([id, s]) => (
        <Hotspot
          key={id}
          spot={s}
          active={id === selected}
          onClick={() => onSelect(id)}
        />
      ))}

      <Sparkles
        count={70}
        scale={[4.5, 2.6, 3]}
        position={[0, 1, 0]}
        size={1.8}
        speed={0.32}
        opacity={0.5}
        color="#cfd3da"
      />

      <ContactShadows
        position={[0, 0.001, 0]}
        opacity={0.5}
        scale={7}
        blur={2.2}
        far={2.2}
        color="#000000"
      />
      <OrbitControls
        autoRotate
        autoRotateSpeed={1.1}
        enablePan={false}
        minDistance={2.2}
        maxDistance={7}
        minPolarAngle={0.3}
        maxPolarAngle={Math.PI / 2.05}
        target={[0, 0.75, 0]}
      />
    </Canvas>
  );
}
