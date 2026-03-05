import { motion } from "framer-motion";
import React from "react";

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
  const base =
    "relative px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 backdrop-blur-md";

  const variants = {
    primary:
      "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-white shadow-lg hover:shadow-pink-400/40",

    secondary:
      "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20",

    ghost:
      "bg-transparent text-white hover:bg-white/10",
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {/* glow effect */}
      {variant === "primary" && (
        <span
          className="absolute inset-0 rounded-2xl blur-xl opacity-40 
          bg-linear-to-r from-pink-400 via-purple-400 to-indigo-400"
        />
      )}

      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>
    </motion.button>
  );
}