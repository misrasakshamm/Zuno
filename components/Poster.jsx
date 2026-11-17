"use client";
import { useState } from "react";
import Art from "./Art";
import { useFanart } from "@/lib/fanart";
export default function Poster({ title, src, ratio = "aspect-[2/3]" }) {
  const [broken, setBroken] = useState(false);
  const fa = useFanart(title, "poster");
  return (
    <figure className="w-[calc((100%-0.75rem)/2)] shrink-0 sm:w-[calc((100%-2.25rem)/4)] lg:w-[calc((100%-5rem)/6)]">
      <div className={`${ratio} overflow-hidden rounded-md border border-zline`}>
        {broken ? <Art title={title} /> : <img src={fa || src} alt={title} loading="lazy" onError={() => setBroken(true)} key={fa || src} className="h-full w-full object-cover" />}
      </div>
      <figcaption className="mt-2 truncate text-center text-[13px] text-white/90">{title}</figcaption>
    </figure>
  );
}
