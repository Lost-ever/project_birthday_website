"use client";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import CardModal from "./ui/Card";
import { useState } from "react";

export default function MessageCards({
  title,
  notes,
}: {
  title: string;
  notes: { title: string; text: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <section className="mx-auto w-full max-w-4xl">
      <div className="mb-4 text-left text-sm font-medium text-white/80 font-cute">
        {title}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 font-cute">
        {notes.map((n, idx) => (
          <motion.div
            key={n.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * idx, duration: 0.5 }}
            className="rounded-3xl bg-white/6 p-5 backdrop-blur ring-1 ring-white/12"
          >
            <div className="text-base font-semibold text-white">{n.title}</div>
            <div className="mt-2 text-sm leading-relaxed text-white/75">
              {n.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4">
        <Button className="active:shadow-pink-400/40 transition-all duration-300 active:scale-110"
        onClick={() => {setOpen(true)}}>
            <p>Next Surprise</p>
        </Button>
      </div>
      <div>
        <CardModal
        open={open}
        onClose={() => setOpen(false)}
        toName="To you"
        fromName="— Himanshu"
        message="I hope your day is full of soft moments, big smiles, and all the love you deserve. 💗"
      />
      </div>
    </section>
  );
}