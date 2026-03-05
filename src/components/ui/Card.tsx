import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type CardModalProps = {
  open: boolean;
  onClose: () => void;
  toName?: string;
  fromName?: string;
  message?: string;
};

export default function CardModal({
  open,
  onClose,
  toName = "To you",
  fromName = "— From me",
  message = "My love, you are a very special person. Happy Birthday 💗",
}: CardModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <button
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
            aria-label="Close"
          />

          {/* Center wrapper */}
          <div className="relative mx-auto flex max-h-dvh max-w-5xl items-center justify-center px-4 py-10">
            <motion.div
              initial={{ y: 18, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 18, scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="
                relative w-full max-w-3xl overflow-hidden rounded-3xl
                bg-[#f7f0de] text-zinc-800 shadow-2xl
                ring-1 ring-black/10
              "
            >
              {/* Optional subtle paper texture / gradient */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(255,210,230,0.35),transparent_55%)]" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="
                  absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center
                  rounded-full bg-white/70 text-zinc-700
                  ring-1 ring-black/10
                  hover:bg-white
                  active:scale-95
                "
                aria-label="Close card"
              >
                ✕
              </button>

              {/* Card Content */}
              <div className="relative grid grid-cols-1 md:grid-cols-2">
                {/* LEFT: illustration */}
                <div className="relative min-h-55 md:min-h-90">
                    <img
                        src="https://tenor.com/view/tonton-tonton-friends-chubby-bunny-tonton-tobi-gif-18564691.gif"
                        alt="cute gif"
                        className="w-full h-auto pointer-events-none"
                    />
                </div>

                {/* RIGHT: text + small top-right image */}
                <div className="relative p-6 md:p-8">
                  {/* top-right mini illustration
                  <div className="absolute right-4 top-4 hidden h-16 w-20 md:block">
                    <img
                        src="https://tenor.com/view/bugcat-capoo-bugcat-capoo-and-tutu-love-kiss-smooch-gif-17007171.gif"
                        alt="cute gif"
                        className="w-full h-auto pointer-events-none"
                    />
                  </div> */}

                  <div className="pr-0 md:pr-16">
                    <div className="text-sm font-semibold tracking-wide text-zinc-700">
                      {toName} <span className="text-red-500">❤</span>
                    </div>

                    <h2 className="mt-2 text-2xl font-bold text-zinc-900 md:text-3xl">
                      Happy Birthday ✨
                    </h2>

                    <p className="mt-4 text-[15px] leading-relaxed text-zinc-700 md:text-base">
                      {message}
                    </p>

                    <div className="mt-6 text-sm font-medium text-zinc-600">
                      {fromName}
                    </div>

                    {/* Action buttons */}
                    <div className="mt-7 flex flex-wrap gap-3">
                      <button
                        onClick={onClose}
                        className="
                          rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white
                          shadow-lg shadow-black/20
                          hover:brightness-110
                          active:scale-[0.98]
                        "
                      >
                        Close
                      </button>

                      <button
                        onClick={() => {}}
                        className="
                          rounded-2xl bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-800
                          ring-1 ring-black/10
                          hover:bg-white
                          active:scale-[0.98]
                        "
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}