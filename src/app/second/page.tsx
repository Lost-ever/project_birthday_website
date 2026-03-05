"use client";
import { motion, AnimatePresence } from "framer-motion";
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
                <div className="fixed top-25 left-45 scale-90">
                        <img
                        src="/pookie.gif"
                        alt="cute gif"
                        className="pointer-events-none"
                    />
                </div>
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl font-semibold tracking-tight sm:text-6xl flex"
                    >
                        <span className="bg-linear-to-r text-[#f3ddc2] bg-clip-text flex">
                        {CONFIG.titleLine}<p className="text-[#76393a] px-4">{"U"}</p>{CONFIG._titleLine}
                        </span>{"   "}
                        <span className="text-[#76393a] px-4">{CONFIG.personName}</span> 🎀
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-xl font-semibold tracking-tight mt-5">
                        <p>Hope you have a great year ahead where everything goes as planned,</p>
                        <p>with lots of success and a good placement coming your way.</p>
                    </motion.div>

                    <div className="mt-8">
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
                    </div>
                    </div>
                    <div className="fixed bottom-0 right-0 scale-90">
                        <img
                        src="/alien.gif"
                        alt="cute gif"
                        className="w-full h-auto pointer-events-none"
                    />
                    </div>
                <footer className="mt-10 flex items-center justify-center text-lg text-[#f3ddc2]">
                    <div className="items-end justify-center flex">
                           🙂‍↕️🙂‍↕️🙂‍↕️
                    </div>
                </footer>
              </div>
              <ConfettiBurst/>
        </main>
        </>
    );
}