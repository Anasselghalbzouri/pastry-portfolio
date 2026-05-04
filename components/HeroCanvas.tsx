"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Gold dust particles ────────────────────────────────────────────────────
const PARTICLE_COUNT = 180;

function GoldDust() {
  const pointsRef = useRef<THREE.Points>(null);

  // Pre-compute per-particle data once
  const { positions, speeds, driftPhase } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const speeds = new Float32Array(PARTICLE_COUNT);
    const driftPhase = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;        // x  spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;   // y  spread
      positions[i * 3 + 2] = -1 - Math.random() * 5;        // z  depth (behind content)
      speeds[i] = 0.003 + Math.random() * 0.007;
      driftPhase[i] = Math.random() * Math.PI * 2;
    }
    return { positions, speeds, driftPhase };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const attr = pointsRef.current.geometry.attributes.position;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // float upward
      attr.array[i * 3 + 1] += speeds[i];
      // gentle horizontal drift
      attr.array[i * 3] += Math.sin(t * 0.4 + driftPhase[i]) * 0.002;

      // reset when above viewport
      if (attr.array[i * 3 + 1] > 7) {
        attr.array[i * 3 + 1] = -7;
        attr.array[i * 3] = (Math.random() - 0.5) * 16;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#C6A36D"
        size={0.055}
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ─── Cream micro-particles (second layer) ──────────────────────────────────
const MICRO_COUNT = 80;

function CreamDust() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, speeds, driftPhase } = useMemo(() => {
    const positions = new Float32Array(MICRO_COUNT * 3);
    const speeds = new Float32Array(MICRO_COUNT);
    const driftPhase = new Float32Array(MICRO_COUNT);

    for (let i = 0; i < MICRO_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = -0.5 - Math.random() * 3;
      speeds[i] = 0.001 + Math.random() * 0.004;
      driftPhase[i] = Math.random() * Math.PI * 2;
    }
    return { positions, speeds, driftPhase };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const attr = pointsRef.current.geometry.attributes.position;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < MICRO_COUNT; i++) {
      attr.array[i * 3 + 1] += speeds[i];
      attr.array[i * 3] += Math.cos(t * 0.3 + driftPhase[i]) * 0.0015;

      if (attr.array[i * 3 + 1] > 7) {
        attr.array[i * 3 + 1] = -7;
        attr.array[i * 3] = (Math.random() - 0.5) * 16;
      }
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={MICRO_COUNT}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#F0EBE0"
        size={0.03}
        transparent
        opacity={0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ─── Decorative rotating torus ring ────────────────────────────────────────
function GoldRing() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.12;
      outerRef.current.rotation.y = t * 0.08;
      // subtle breathing scale
      const s = 1 + Math.sin(t * 0.6) * 0.02;
      outerRef.current.scale.setScalar(s);
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.08;
      innerRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <group position={[3.5, 0, -3]}>
      {/* Outer ring */}
      <mesh ref={outerRef}>
        <torusGeometry args={[1.8, 0.012, 8, 80]} />
        <meshBasicMaterial color="#C6A36D" transparent opacity={0.22} />
      </mesh>
      {/* Inner ring — counter-rotates */}
      <mesh ref={innerRef}>
        <torusGeometry args={[1.1, 0.008, 8, 60]} />
        <meshBasicMaterial color="#C6A36D" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

// ─── Secondary smaller ring (left side) ────────────────────────────────────
function AccentRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.06;
    ref.current.rotation.x = t * 0.1;
    ref.current.position.y = Math.sin(t * 0.4) * 0.3;
  });

  return (
    <mesh ref={ref} position={[-4, 1.5, -4]}>
      <torusGeometry args={[0.8, 0.007, 6, 50]} />
      <meshBasicMaterial color="#C6A36D" transparent opacity={0.12} />
    </mesh>
  );
}

// ─── Mouse parallax camera ──────────────────────────────────────────────────
function CameraParallax() {
  const { camera } = useThree();

  useFrame((state) => {
    // Smooth camera drift with mouse
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      state.mouse.x * 0.4,
      0.04
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      state.mouse.y * 0.25,
      0.04
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ─── Exported canvas ────────────────────────────────────────────────────────
export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <CameraParallax />
      <GoldDust />
      <CreamDust />
      <GoldRing />
      <AccentRing />
    </Canvas>
  );
}
