"use client";
import { motion } from "framer-motion";
import ConfettiBurst from "@/components/ConfettiBurst";
import CONFIG from "../Config";
import { useRouter } from "next/navigation";

export default function ThirdPage(){
    const router = useRouter();
    const changePage = () => {
              router.push("/second");
            };
    return(
        <>
        <main className="relative w-full min-h-screen justify-center px-5 py-5">
              {/* Soft gradient glow */}
              <div className="pointer-events-none font-cute absolute inset-0 bg-[#81b29a]"/>
        
              {/* Content */}
              <div className="relative z-10 flex min-h-full max-w-full flex-col px-5 py-10 bg-[#f2cc8f] rounded-2xl">
                <header className="flex items-center justify-between gap-4">
                  <div className="text-lg text-[#2c2f44] font-cute">{CONFIG.birthdayDate}</div>
                  <div className="text-lg text-[#2c2f44] font-cute">for {CONFIG.personName}</div>
                </header>
                <div className="flex justify-between items-start-safe">
                    <div className="px-8 py-3 items-center justify-center flex">
                        <img
                        src={"/cat.gif"}
                        alt="cat img"
                        className="pointer-events-none scale-150"
                        />
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-center text-center mt-10">
                    <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}>
                        <h1 className="font-cute text-5xl text-[#2c2f44]">Bouquet of Words 🌸</h1>
                    </motion.div>
                    <div className="mt-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-150 [animation-fill-mode:both]">
                        <div className="text-center">
                            <div className="flex flex-col max-w-lg mx-auto bg-[#F5F5DC] rounded-full">
                                <motion.div 
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="flex relative justify-center items-center py-4 my-4">
                                    <div className="relative w-125 min-h-102.5">
                                        <img src="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/bush/bush-2.png" alt="bush background" width="600" height="500" className="absolute top-1/2 left-1/2 z-0 transform -translate-x-1/2 -translate-y-1/2" loading="eager"/>
                                        <div className="flex flex-wrap reverse w-75 justify-center items-center -space-x-4 -space-y-20 relative m-auto">
                                            <div className="flex relative justify-center items-center pt-4" style={{order:2}}>
                                                <picture>
                                                    <source srcSet={"https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/orchid.webp"} type="image/webp"/>
                                                <img src="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/orchid.webp" alt="orchid" width="120" height="120" className="relative z-10 transition-transform hover:scale-105" style={{transform:"rotate(-0.3959411749973851deg)"}} loading="lazy"/>
                                                </picture></div>
                                            <div className="flex relative justify-center items-center pt-4" style={{order:6}}>
                                                <picture>
                                                    <source srcSet="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/tulip.webp" type="image/webp"/>
                                                    <img src="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/tulip.webp" alt="tulip" width="120" height="120" className="relative z-10 transition-transform hover:scale-105" style={{transform:"rotate(-1.881292046803631deg)"}} loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div className="flex relative justify-center items-center pt-4" style={{order:5}}>
                                                <picture>
                                                    <source srcSet="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/dahlia.webp" type="image/webp"/>
                                                    <img src="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/dahlia.webp" alt="dahlia" width="80" height="80" className="relative z-10 transition-transform hover:scale-105" style={{transform:"rotate(-4.505785449053674deg)"}} loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div className="flex relative justify-center items-center pt-4" style={{order:4}}>
                                                <picture>
                                                    <source srcSet="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/ranunculus.webp" type="image/webp"/>
                                                    <img src="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/ranunculus.webp" alt="ranunculus" width="120" height="120" className="relative z-10 transition-transform hover:scale-105" style={{transform:"rotate(4.32430825086678deg)"}} loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div className="flex relative justify-center items-center pt-4" style={{order:3}}>
                                                <picture>
                                                    <source srcSet="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/sunflower.webp" type="image/webp"/>
                                                    <img src="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/sunflower.webp" alt="sunflower" width="160" height="160" className="relative z-10 transition-transform hover:scale-105" style={{transform:"rotate(-4.510650715898958deg)"}} loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div className="flex relative justify-center items-center pt-4" style={{order:0}}>
                                                <picture>
                                                    <source srcSet="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/lily.webp" type="image/webp"/>
                                                    <img src="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/lily.webp" alt="lily" width="160" height="160" className="relative z-10 transition-transform hover:scale-105" style={{transform:"rotate(-2.2424201449515513deg)"}} loading="lazy"/>
                                                </picture>
                                            </div>
                                            <div className="flex relative justify-center items-center pt-4" style={{order:1}}>
                                                <picture>
                                                    <source srcSet="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/daisy.webp" type="image/webp"/>
                                                    <img src="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/flowers/daisy.webp" alt="daisy" width="80" height="80" className="relative z-10 transition-transform hover:scale-105" style={{transform:"rotate(-0.5539881117629619deg)"}} loading="lazy"/>
                                                </picture>
                                            </div>
                                        </div>
                                        <div>
                                            <img src="https://pub-4ac1b7f0da8c43e8983d7821a18a8c0d.r2.dev/color/bush/bush-2-top.png" alt="bush top" width="600" height="500" className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2" loading="eager"/>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="mx-auto max-w-sm text-sm text-center">
                                <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}>
                                    <div className="bg-white border-[1.5px] border-black p-8 mx-auto -translate-y-12.5 -rotate-2 hover:-rotate-2 transition-all duration-300">
                                        <div className="space-y-4">
                                            <div className="flex flex-row gap-2 items-left justify-left">
                                                <p className="bg-transparent border-none focus:outline-none focus:ring-0 text-[#2c2f44] font-cur">Dear Shakshie,</p>
                                            </div>
                                            <div className="text-left text-[#2c2f44] font-cur">
                                                <p>I like you, and I like you more than just a little. 🤍
                                                    <br/>
                                                    <br/>
                                                </p>
                                                <p>I’d like the chance to know you better, and for you to know me too.
                                                    <br/>
                                                    <br/>
                                                </p>
                                                <p>I admire your calm and introverted personality, there’s something very genuine and thoughtful about the way you are. 😌
                                                    <br/>
                                                    <br/>
                                                </p>
                                                <p>I know you’re busy, and I would never want to distract you from your work, your research, or preparing for your placement.
                                                </p>
                                                <p>Focus on that fully.
                                                    <br/>
                                                    <br/>
                                                </p>
                                                <p>Also, if I ever seem awkward or if I make you uncomfortable when I try to talk, that’s never my intention. To be honest, I get a little nervous too when I see you, but I still want to talk to you.
                                                    <br/>
                                                    <br/>
                                                </p>
                                                <p>After all, development takes time… especially if it’s happening in India.
                                                    <br/>
                                                    <br/>
                                                </p>
                                                <p>Maybe we can see later, whenever you get placed and have some free time.
                                                    <br/>
                                                    <br/>
                                                </p>
                                                <p>All the Best. 👍🏻</p>
                                            </div>
                                            <div className="flex flex-col gap-2 justify-end items-end">
                                                <p className="bg-transparent border-none focus:outline-none focus:ring-0 text-[#2c2f44] font-cur">Sincerely,</p>
                                                <p className="bg-transparent border-none focus:outline-none focus:ring-0 text-[#2c2f44] font-cur">Himanshu</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                router.push("/fourth");
                            }}
                            className="rounded-2xl bg-white/10 px-6 py-3 text-sm cursor-pointer font-medium text-white backdrop-blur ring-1 ring-white/20 hover:bg-white/15"
                        >
                            Final Reveal
                        </motion.button>
                    </div>
                    </div>
                    <div className="px-8 py-3 items-center justify-center flex">
                        <img
                        src={"/monster.gif"}
                        alt="cat img"
                        className="pointer-events-none scale-150"
                        />
                    </div>
                </div>
                <footer className="mt-10 flex items-center justify-center text-lg text-[#2c2f44]">
                  🙂‍↔️🙂‍↔️🙂‍↔️
                </footer>
              </div>
        
              {/* Confetti overlay */}
              <ConfettiBurst/>
        </main>
        </>
    );
}