"use client";
import { motion, AnimatePresence } from "framer-motion";
import MessageCards from "@/components/MessageCards";
import { useMemo, useState } from "react";
import ConfettiBurst from "@/components/ConfettiBurst";
import CONFIG from "../Config";

export default function SecondPage(){
    const [opened, setOpened] = useState(false);
    const [burstKey, setBurstKey] = useState(0);
    return(
        <>
        <main className="relative h-screen justify-center px-5 py-5">
              {/* Soft gradient glow */}
              <div className="pointer-events-none font-cute absolute inset-0 bg-[#f3ddc2]"/>
        
              {/* Content */}
              <div className="relative z-10 flex h-full max-w-full flex-col px-5 py-10 bg-[#618a7f] rounded-2xl">
                <header className="flex items-center justify-between gap-4">
                  <div className="text-lg text-[#f3ddc2] font-cute">{CONFIG.birthdayDate}</div>
                  <div className="text-lg text-[#f3ddc2] font-cute">for <span className="text-white font-cute">{CONFIG.personName}</span></div>
                </header>
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-semibold tracking-tight sm:text-6xl"
                    >
                        <span className="bg-linear-to-r text-[#f3ddc2] bg-clip-text">
                        {CONFIG.titleLine}
                        </span>{"   "}
                        <span className="text-[#66515c]">{CONFIG.personName}</span> 🎀
                    </motion.h1>

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
                            className="mt-10 w-full max-w-2xl rounded-3xl bg-white/6 p-6 backdrop-blur ring-1 ring-white/12 font-cute"
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
                <footer className="mt-10 flex items-center justify-center text-xs text-[#f3ddc2]">
                  made By ❤️ + Himanshu
                </footer>
              </div>
        
              {/* Confetti overlay */}
              <ConfettiBurst/>
        </main>
        </>
    );
}