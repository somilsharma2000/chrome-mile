"use client";

import { Suspense, useMemo, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, ContactShadows, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const BP = process.env.NEXT_PUBLIC_BASE_PATH || "";
const MODEL_URL = `${BP}/models/motorcycle.glb`;

export type Spot = {
  x: number;
  y: number;
  z: number;
  w: number;
  h: number;
  face: "side" | "top";
};

/** lot hotspots in normalized world units (bike length = 2.2 on X) */
export const SPOTS: Record<string, Spot> = {
  T1: { x: 0.18, y: 0.88, z: 0.19, w: 0.13, h: 0.045, face: "side" }, // tank flanks
  F3: { x: -0.14, y: 0.82, z: 0.16, w: 0.11, h: 0.04, face: "side" }, // seat cowl flanks
  D1: { x: -0.34, y: 0.6, z: 0.16, w: 0.085, h: 0.03, face: "side" }, // side covers
  D2: { x: 0.8, y: 0.74, z: 0.03, w: 0.11, h: 0.03, face: "top" }, // front mudguard
  D3: { x: 0.62, y: 0.52, z: 0.1, w: 0.085, h: 0.03, face: "side" }, // fork sliders
};

function Bike() {
  const { scene } = useGLTF(MODEL_URL);
  const obj = useMemo(() => {
    // clone so we never mutate the cached original
    const m = scene.clone(true);
    const box = new THREE.Box3().setFromObject(m);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const s = 2.2 / size.x;
    m.scale.setScalar(s);
    m.position.set(-center.x * s, -box.min.y * s, -center.z * s);
    m.traverse((c) => {
      const mesh = c as unknown as { isMesh?: boolean; castShadow?: boolean };
      if (mesh.isMesh) mesh.castShadow = true;
    });
    return m;
  }, [scene]);
  return <primitive object={obj} />;
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
  const color = active ? "#D6402B" : "#C8C8CF";
  return (
    <mesh position={[spot.x, spot.y, 0]}>
      <sphereGeometry args={[active ? 0.035 : 0.026, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={active ? 1.8 : 0.8}
      />
      <mesh
        position={[0, 0, spot.z > 0 ? spot.z : spot.z]}
        visible={false}
        onClick={onClick}
      >
        <sphereGeometry args={[0.07, 8, 8]} />
      </mesh>
    </mesh>
  );
}

function LogoDecal({ url, spot }: { url: string; spot: Spot }) {
  const tex = useLoader(THREE.TextureLoader, url);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = (
    <meshBasicMaterial map={tex} transparent depthWrite={false} />
  );
  const geo = <planeGeometry args={[spot.w, spot.h]} />;
  return (
    <>
      {spot.face === "side" ? (
        <>
          <mesh position={[spot.x, spot.y, spot.z]}>{geo}{mat}</mesh>
          <mesh position={[spot.x, spot.y, -spot.z]} rotation={[0, Math.PI, 0]}>
            {geo}
            {mat}
          </mesh>
        </>
      ) : (
        <mesh position={[spot.x, spot.y, spot.z]} rotation={[-Math.PI / 2, 0, 0]}>
          {geo}
          {mat}
        </mesh>
      )}
    </>
  );
}

export default function Lot3DScene({
  selected,
  logoUrl,
  onSelect,
}: {
  selected: string;
  logoUrl: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <Canvas
      camera={{ position: [1.9, 1.15, 2.5], fov: 35 }}
      style={{ height: 460 }}
      shadows
    >
      <color attach="background" args={["#0a0a0b"]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.3} castShadow />
      <directionalLight position={[-4, 2, -4]} intensity={0.45} color="#99aabb" />
      <spotLight position={[0, 5, 0]} intensity={0.6} angle={0.7} penumbra={1} />

      <Suspense fallback={null}>
        <Bike />
        {logoUrl && <LogoDecal url={logoUrl} spot={SPOTS[selected]} />}
      </Suspense>

      {Object.entries(SPOTS).map(([id, spot]) => (
        <Hotspot
          key={id}
          spot={spot}
          active={id === selected}
          onClick={() => onSelect(id)}
        />
      ))}

      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.45}
        scale={6}
        blur={2.4}
        far={2}
        color="#000000"
      />
      <OrbitControls
        autoRotate
        autoRotateSpeed={1.1}
        enablePan={false}
        minDistance={1.8}
        maxDistance={6}
        minPolarAngle={0.35}
        maxPolarAngle={Math.PI / 2}
        target={[0, 0.6, 0]}
      />
    </Canvas>
  );
}
