import { motion } from "framer-motion";
import React, { useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  const base =
    "relative overflow-hidden px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 backdrop-blur-md active:shadow-pink-400/40";

  const variants = {
    primary:
      "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white shadow-lg hover:shadow-pink-400/40",

    secondary:
      "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20",

    ghost:
      "bg-transparent text-white hover:bg-white/10",
  };

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={(e) => {
        createRipple(e);
        onClick?.();
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.93 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {/* glow effect */}
      {variant === "primary" && (
        <span
          className="absolute inset-0 rounded-2xl blur-xl opacity-40 
          bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400"
        />
      )}

      {/* ripple effects */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute bg-white/40 rounded-full pointer-events-none animate-ripple"
          style={{
            left: r.x,
            top: r.y,
            width: 20,
            height: 20,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>
    </motion.button>
  );
}