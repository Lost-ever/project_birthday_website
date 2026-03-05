"use client";
import { useEffect, useMemo, useState } from "react";

type Piece = {
  id: number;
  left: number;
  delay: number;
  dur: number;
  rot: number;
  size: number;
  drift: number;
};

export default function ConfettiBurst() {
  const [mounted, setMounted] = useState(false);

  const pieces = useMemo<Piece[]>(() => {
    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    return Array.from({ length: 90 }).map((_, i) => ({
      id: i,
      left: rand(0, 100),
      delay: rand(0, 0.25),
      dur: rand(1.4, 2.6),
      rot: rand(-180, 180),
      size: rand(6, 12),
      drift: rand(-120, 120),
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {
        pieces.map((p) => (
          <span
            key={p.id}
            className="absolute -top-3 rounded-sm opacity-90"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size * 0.6}px`,
              background: `hsl(${(p.id * 19) % 360} 90% 70%)`,
              transform: `rotate(${p.rot}deg)`,
              animation: `fall ${p.dur}s ease-in ${p.delay}s 1 both`,
              filter: "drop-shadow(0 6px 10px rgba(0,0,0,.25))",
              ["--drift" as any]: `${p.drift}px`,
            }}
          />
        ))}

    <style jsx>
        {`
        @keyframes fall {
            0% {
            transform: translate3d(0, 0, 0) rotate(0deg);
            opacity: 0;
            }
            10% {
            opacity: 1;
            }
            100% {
            transform: translate3d(var(--drift), 110vh, 0) rotate(720deg);
            opacity: 0; /* <-- change from 0.85 to 0 */
            }
        }`}
    </style>
    </div>
  );
}