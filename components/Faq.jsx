"use client";
import { useState } from "react";
import Modal from "./Modal";
import { FAQS } from "@/lib/data";
export default function Faq() {
  const [open, setOpen] = useState(null);
  const [ask, setAsk] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <section id="faq" className="mt-16">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
        <button onClick={() => { setSent(false); setAsk(true); }} className="rounded-full bg-zdeep px-4 py-1.5 text-[15px] font-semibold hover:bg-zred">Ask question</button>
      </div>
      <ul className="space-y-2">
        {FAQS.map(([q, a], i) => (
          <li key={q} className="overflow-hidden rounded-md bg-zcard">
            <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-stretch text-left">
              <span className="grid w-16 shrink-0 place-items-center bg-zdark py-3 text-xl font-medium">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex flex-1 items-center justify-between px-5 text-sm font-bold">{q}<span className={`transition-transform ${open === i ? "rotate-180" : ""}`}>⌄</span></span>
            </button>
            {open === i && <p className="px-5 py-3 text-sm text-white/70 sm:pl-[5.25rem]">{a}</p>}
          </li>))}
      </ul>
      <Modal open={ask} onClose={() => setAsk(false)} title="Ask a question">
        {sent ? <p className="text-sm">Thanks! We'll get back to you soon.</p> : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-3">
            <input required type="email" placeholder="Your email" className="w-full rounded bg-black px-3 py-2 text-sm outline-none" />
            <textarea required rows={4} placeholder="Your question" className="w-full rounded bg-black px-3 py-2 text-sm outline-none" />
            <button className="w-full rounded bg-zdeep py-2 text-sm font-semibold hover:bg-zred">Send</button>
          </form>)}
      </Modal>
    </section>
  );
}
