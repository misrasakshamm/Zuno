"use client";
import { useState } from "react";
import Modal from "./Modal";
export default function Hero() {
  const [playing, setPlaying] = useState(false);
  const [saved, setSaved] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  return (
    <section id="top" className="relative min-h-[560px] overflow-hidden sm:min-h-[620px] lg:min-h-[640px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,#9a3a0a,#3a1606_45%,#120a06_85%)]" />
      {imgOk && <img src="/posters/hero.jpg" alt="Demon Slayer: Kimetsu no Yaiba" onError={() => setImgOk(false)} className="absolute inset-0 h-full w-full object-cover object-[65%_center]" />}
      <div className="absolute inset-0 bg-gradient-to-t from-zbg via-zbg/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      <div className="relative mx-auto flex min-h-[560px] max-w-page flex-col justify-end px-4 pb-24 sm:min-h-[620px] sm:px-6 lg:min-h-[640px]">
        <p className="text-xs uppercase">Series</p>
        <h1 className="mt-1 max-w-xl text-4xl font-extrabold uppercase leading-[0.95] sm:text-5xl">Demon Slayer: Kimetsu no Yaiba</h1>
        <p className="mt-3 max-w-md text-[13px] leading-snug text-white/90">A family is attacked by demons and only two members survive – Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.</p>
        <div className="mt-3 flex items-center gap-2 text-[11px] text-white/80">
          <span className="rounded-full border border-white/70 px-3 py-px">ANIME</span><span>2019-2025</span><span>IMDb</span><span>★ 8.6/10</span>
        </div>
        <div className="mt-3 flex gap-2 text-[15px]">
          <button onClick={() => setPlaying(true)} className="rounded-full bg-zred px-4 py-1.5 hover:bg-red-700">Play Now ▶</button>
          <button onClick={() => setSaved(!saved)} className="rounded-full border border-white/80 px-4 py-1.5 hover:bg-white/10">{saved ? "Added ✓" : "Add to watchlist +"}</button>
        </div>
      </div>
      <Modal open={playing} onClose={() => setPlaying(false)} title="Demon Slayer: Kimetsu no Yaiba">
        <div className="grid aspect-video place-items-center rounded bg-black text-sm text-white/70">Player placeholder</div>
      </Modal>
    </section>
  );
}
