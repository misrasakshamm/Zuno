"use client";
import { useRef } from "react";
import Poster from "./Poster";
export default function Row({ name, items }) {
  const ref = useRef(null);
  const next = () => { const el = ref.current; const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4; el.scrollBy({ left: end ? -el.scrollWidth : el.clientWidth, behavior: "smooth" }); };
  return (
    <section className="mt-8">
      <h2 className="mb-3 text-sm font-bold uppercase">{name}</h2>
      <div className="relative pr-12 sm:pr-14">
        <div ref={ref} className="no-scrollbar flex gap-3 overflow-x-auto scroll-smooth lg:gap-4">
          {items.map((it, i) => <Poster key={it.title + i} {...it} />)}
        </div>
        <button onClick={next} aria-label={`Next ${name}`} className="absolute right-0 top-[38%] grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-black/70 hover:bg-white hover:text-black"><svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
      </div>
    </section>
  );
}
