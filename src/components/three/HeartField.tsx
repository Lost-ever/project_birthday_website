"use client";

import { Instances, Instance } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

function makeHeartShape() {
  const s = new THREE.Shape();
  s.moveTo(0, 0.25);
  s.bezierCurveTo(0, 0.55, -0.5, 0.55, -0.5, 0.2);
  s.bezierCurveTo(-0.5, -0.1, -0.2, -0.25, 0, -0.45);
  s.bezierCurveTo(0.2, -0.25, 0.5, -0.1, 0.5, 0.2);
  s.bezierCurveTo(0.5, 0.55, 0, 0.55, 0, 0.25);
  return s;
}

type HeartDatum = {
  pos: THREE.Vector3;
  rot: THREE.Euler;
  scl: number;
  speed: number;
  wobble: number;
  hue: number;
};

export default function HeartField({ opened }: { opened: boolean }) {
  const group = useRef<THREE.Group>(null);

  const { geometry, data } = useMemo(() => {
    const shape = makeHeartShape();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 2,
      steps: 1,
    });
    geo.center();

    const hearts: HeartDatum[] = Array.from({ length: 200 }).map(() => {
      const r = (min: number, max: number) => min + Math.random() * (max - min);
      return {
        pos: new THREE.Vector3(r(-9.6, 9.6), r(-3.6, 4.8), r(-8.5, -0.5)),
        rot: new THREE.Euler(r(0, Math.PI), r(0, Math.PI), r(0, Math.PI)),
        scl: r(0.12, 0.42),
        speed: r(0.35, 0.9),
        wobble: r(0.6, 1.6),
        hue: r(0.86, 0.98), // pink/violet range
      };
    });

    return { geometry: geo, data: hearts };
  }, []);

  useFrame((state, dt) => {
    const t = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y += 2*dt * (opened ? 0.12 : 0.05);
      group.current.rotation.x = Math.sin(t * 0.15) * (opened ? 0.06 : 0.03);
    }
  });

  const baseColor = useMemo(() => new THREE.Color(), []);

  return (
    <group ref={group}>
      <Instances geometry={geometry} limit={data.length}>
        <meshStandardMaterial
          metalness={0.55}
          roughness={0.22}
          emissiveIntensity={opened ? 0.55 : 0.25}
          emissive={"#ff7ad9"}
          color={"#ff8de4"}
        />

        {data.map((h, i) => (
          <HeartInstance key={i} datum={h} opened={opened} baseColor={baseColor} />
        ))}
      </Instances>
    </group>
  );
}

function HeartInstance({
  datum,
  opened,
  baseColor,
}: {
  datum: HeartDatum;
  opened: boolean;
  baseColor: THREE.Color;
}) {
  const ref = useRef<THREE.Object3D>(null);

  useFrame((state, dt) => {
    const t = state.clock.getElapsedTime();

    if (!ref.current) return;

    // vertical drift + looping
    ref.current.position.y += dt * (opened ? datum.speed * 0.55 : datum.speed * 0.25);
    ref.current.position.x += Math.sin(t * datum.wobble + datum.pos.z) * dt * (opened ? 0.18 : 0.08);
    ref.current.rotation.y += dt * (opened ? 0.7 : 0.35);
    ref.current.rotation.x += dt * (opened ? 0.45 : 0.22);

    if (ref.current.position.y > 2.2) ref.current.position.y = -2.0;

    // subtle pulsing scale
    const pulse = 1 + Math.sin(t * 1.5 + datum.pos.x) * (opened ? 0.12 : 0.06);
    ref.current.scale.setScalar(datum.scl * pulse);
  });

  const color = useMemo(() => {
    baseColor.setHSL(datum.hue, 0.75, 0.62);
    return baseColor.clone();
  }, [baseColor, datum.hue]);

  return (
    <Instance
      ref={ref}
      position={datum.pos}
      rotation={datum.rot}
      scale={datum.scl}
      color={color}
    />
  );
}