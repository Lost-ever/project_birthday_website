"use client";
import ConfettiBurst from "@/components/ConfettiBurst";
import CONFIG from "../Config";

export default function FourthPage(){
    return(
        <>
        <main className="relative w-full min-h-screen justify-center px-5 py-5">
              {/* Soft gradient glow */}
              <div className="pointer-events-none font-cute absolute inset-0 bg-[#ffead7]"/>
        
              {/* Content */}
              <div className="relative z-10 flex h-full max-w-full flex-col px-5 py-10 bg-[#3e4260] rounded-2xl">
                <header className="flex items-center justify-between gap-4">
                  <div className="text-lg text-[#f3ddc2] font-cute">{CONFIG.birthdayDate}</div>
                  <div className="text-lg text-[#f3ddc2] font-cute">for {CONFIG.personName}</div>
                </header>
                <div className="h-full flex justify-center items-center flex-col gap-5">
                    <div className="flex h-full items-center justify-center">
                        <img
                        src="/end.gif"
                        alt="cute gif"
                        className="pointer-events-none"
                        />
                    </div>
                    <div className="flex justify-center items-center flex-col mt-3">
                        <p className="text-lg">Thanks for reaching till here. I know you don’t want to give false hopes & Blah Blah Blah… </p>
                        <p className="text-lg">But please don’t try to recreate this.</p>
                    </div> 
                    <div className="flex justify-center items-center flex-col">
                        <img
                        src="/end2.gif"
                        alt="cute gif"
                        className="pointer-events-none scale-50"
                        />
                    </div>
                    <div className="-mt-5 flex justify-center items-center">
                        <p>And Once again Timilai Janma Din ko Dherai Badhai 🥳🎈...</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <img
                        src="/huggy-wuggy.gif"
                        alt="cute gif"
                        className="pointer-events-none scale-50"
                        />
                    </div>
                </div>
                <footer className="mt-5 flex items-center justify-center text-lg text-[#f3ddc2]">
                    <div className="items-end justify-center flex">
                           🫠🫠🫠
                    </div>
                </footer>
              </div>
              <ConfettiBurst/>
        </main>
        </>
    );
}