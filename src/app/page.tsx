"use client";
import CONFIG from "./Config";
import { useRouter } from "next/navigation";

export default function FirstPage(){
    const router = useRouter();
    const changePage = () => {
      router.push("/second");
    };
    return(
        <>
        <main className="relative w-screen h-screen justify-center px-5 py-5">
              {/* Soft gradient glow */}
              <div className="pointer-events-none font-cute absolute inset-0 bg-[#f0eee9]"/>
        
              {/* Content */}
              <div className="relative z-10 flex h-full max-w-full flex-col px-5 py-6 bg-[#f5ce79] rounded-2xl">
                <header className="flex items-center justify-between gap-4">
                  <div className="text-lg text-white/70 font-cute">{CONFIG.birthdayDate}</div>
                  <div className="text-lg text-white/70 font-cute">for {CONFIG.personName}</div>
                </header>
                <div className="h-screen">
                  <div className="flex flex-col gap-10 justify-center items-center h-full">
                    <p className="md:text-9xl font-cute text-6xl">Hey!</p>
                    <div className="flex flex-col font-pop mt-5 justify-center items-center">
                      <p className="font-pop">Have Something For You. </p>
                      <p className="font-pop">Its a Virtual Surprise For You</p>
                    </div>
                    <button onClick={changePage}
                    className="mt-8 justify-center flex flex-col inset-0 overflow-hidden scale-50 ">
                      <p className="text-3xl">Click here</p>
                      <img
                        src="/button.gif"
                        alt="cute gif"
                        className="focus:shadow-amber-300 cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
                <footer className="mt-10 flex items-center justify-center text-lg text-[#f3ddc2]">
                    <div className="items-end justify-center flex">
                           🫠🫠🫠
                    </div>
                </footer>
              </div>
            </main>
        </>
    );
}