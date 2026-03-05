"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Scene from "@/components/scene";
import ConfettiBurst from "@/components/ConfettiBurst";
import MessageCards from "@/components/MessageCards";

const CONFIG = {
  personName: "Shakshi",
  fromName: "Himanshu",
  titleLine: "Happy Birthday",
  birthdayDate: "March 5, 2026",
  subtitleLine: "I made a tiny universe for you ✨",
  revealButton: "Tap to open your surprise",
  wishLines: [
    "May your day be soft, bright, and full of wins.",
    "May you laugh a lot—like, genuinely laugh.",
    "And may this year bring you everything you’ve been working for.",
  ],
  galleryTitle: "A few little notes",
  notes: [
    { title: "You energy", text: "You make ordinary moments feel special." },
    { title: "Your smile", text: "Illegal. Needs a permit. 😄" },
    { title: "This year", text: "I’m quietly rooting for you—big time." },
  ],
};

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-stars">
      {/* Soft gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.35),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(255,110,199,0.22),transparent_55%),radial-gradient(circle_at_40%_90%,rgba(80,200,255,0.18),transparent_60%)]" />

      {/* 3D background */}
      <div className="absolute inset-0">
        <Scene opened={opened} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col px-5 py-10">
        <header className="flex items-center justify-between gap-4">
          <div className="text-sm text-white/70">{CONFIG.birthdayDate}</div>
          <div className="text-sm text-white/70">for <span className="text-white">{CONFIG.personName}</span></div>
        </header>

        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            <span className="bg-linear-to-r from-pink-300 via-violet-200 to-cyan-200 bg-clip-text text-transparent">
              {CONFIG.titleLine}
            </span>{" "}
            <span className="text-white">{CONFIG.personName}</span> 🎂
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-4 max-w-xl text-base text-white/80 sm:text-lg"
          >
            {CONFIG.subtitleLine}
          </motion.p>

          <div className="mt-8">
            {!opened ? (
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setOpened(true);
                  setBurstKey((k) => k + 1);
                }}
                className="rounded-2xl bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur ring-1 ring-white/20 hover:bg-white/15"
              >
                {CONFIG.revealButton}
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setBurstKey((k) => k + 1)}
                className="rounded-2xl bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur ring-1 ring-white/20 hover:bg-white/15"
              >
                More confetti ✨
              </motion.button>
            )}
          </div>

          <AnimatePresence>
            {opened && (
              <motion.section
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14 }}
                transition={{ duration: 0.6 }}
                className="mt-10 w-full max-w-2xl rounded-3xl bg-white/6 p-6 backdrop-blur ring-1 ring-white/12"
              >
                <div className="text-left">
                  <div className="text-xs uppercase tracking-widest text-white/60">
                    a wish from {CONFIG.fromName}
                  </div>
                  <div className="mt-3 space-y-2 text-base text-white/85">
                    {CONFIG.wishLines.map((line) => (
                      <p key={line}>• {line}</p>
                    ))}
                  </div>
                  <div className="mt-5 text-sm text-white/70">
                    — {CONFIG.fromName}
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {opened && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 14 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-10 w-full"
              >
                <MessageCards title={CONFIG.galleryTitle} notes={CONFIG.notes} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <footer className="mt-10 flex items-center justify-center text-xs text-white/60">
          made By ❤️ + Himanshu
        </footer>
      </div>

      {/* Confetti overlay */}
      <ConfettiBurst key={burstKey} active={opened || burstKey > 0} />
    </main>
  );
}