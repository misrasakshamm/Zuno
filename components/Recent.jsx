"use client";
import { useState } from "react";
import Art from "./Art";
import { useFanart } from "@/lib/fanart";
import { RECENT } from "@/lib/data";
function Card({ title, src, i }) {
  const [broken, setBroken] = useState(false);
  const fa = useFanart(title, "thumb", i);
  return (
    <article className="overflow-hidden rounded-md border border-zline bg-black">
      <div className="aspect-video">
        {broken ? <Art title={title} /> : <img src={fa || src} alt={title} loading="lazy" onError={() => setBroken(true)} key={fa || src} className="h-full w-full object-cover" />}
      </div>
      <div className="h-[2px] bg-white/20"><div className="h-full w-1/3 bg-zred" /></div>
      <div className="p-1.5"><p className="text-xs font-bold">{title}</p><p className="text-[9px] text-white/50">Episode aired Feb 12, 2022</p></div>
    </article>
  );
}
export default function Recent() {
  const [all, setAll] = useState(false);
  const items = all ? RECENT : RECENT.slice(0, 8);
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-sm font-bold uppercase">Recently watched</h2>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">{items.map((r, i) => <Card key={r.title + i} {...r} i={i} />)}</div>
      <div className="mt-4 text-center"><button onClick={() => setAll(!all)} className="rounded-full bg-zred px-6 py-1 text-[15px] hover:bg-red-700">{all ? "VIEW LESS" : "VIEW MORE"}</button></div>
    </section>
  );
}
