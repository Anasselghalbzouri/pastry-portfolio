"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function GoldOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.6, 64, 64]}>
        <MeshDistortMaterial
          color="#C6A36D"
          attach="material"
          distort={0.38}
          speed={1.8}
          roughness={0.15}
          metalness={0.85}
          opacity={0.18}
          transparent
        />
      </Sphere>
    </Float>
  );
}

function SmallOrb({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere args={[0.25, 32, 32]} position={position}>
        <MeshDistortMaterial
          color="#C6A36D"
          distort={0.5}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
          opacity={0.22}
          transparent
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.08;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#C6A36D"
        size={0.025}
        sizeAttenuation
        opacity={0.55}
        depthWrite={false}
      />
    </Points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[4, 4, 4]} intensity={1.2} color="#C6A36D" />
        <pointLight position={[-4, -2, 2]} intensity={0.6} color="#ffffff" />
        <GoldOrb />
        <SmallOrb position={[3.2, 1.5, -1]} />
        <SmallOrb position={[-3.5, -1.2, -0.5]} />
        <SmallOrb position={[2.0, -2.5, 0.5]} />
        <ParticleField />
      </Canvas>
    </div>
  );
}
