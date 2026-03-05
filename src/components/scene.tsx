"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";
import HeartField from "@/components/three/HeartField";

function ResponsiveScene({ opened }: { opened: boolean }) {
  const { viewport } = useThree();

  const isMobile = viewport.width < 6;

  const heartScale = isMobile ? 0.75 : 1;
  const heartZ = isMobile ? -2 : 0;

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} />

      <Float
        speed={opened ? 1.25 : 0.7}
        rotationIntensity={opened ? 0.8 : 0.35}
        floatIntensity={opened ? 1.2 : 0.7}
      >
        <group scale={heartScale} position={[0, 0, heartZ]}>
          <HeartField opened={opened} />
        </group>
      </Float>

      <Sparkles
        count={opened ? 260 : 140}
        scale={[12, 6, 12]}
        size={opened ? 2.2 : 1.6}
        speed={opened ? 0.6 : 0.35}
        opacity={0.65}
      />

      <Environment preset="city" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={opened ? 0.65 : 0.25}
        maxPolarAngle={Math.PI * 0.62}
        minPolarAngle={Math.PI * 0.38}
      />
    </>
  );
}

export default function Scene({ opened }: { opened: boolean }) {
  const fog = useMemo(() => new THREE.Fog("#000000", 6, 22), []);

  return (
    <Canvas
      camera={{ position: [0, 0.4, 8], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <primitive object={fog} attach="fog" />
      <ResponsiveScene opened={opened} />
    </Canvas>
  );
}