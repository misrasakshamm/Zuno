"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { SUGGESTIONS } from "@/lib/data";
const TABS = [["all", "All movies"], ["movie", "Tv shows"], ["series", "Web series"]];
const Ic = ({ d, c = "h-4 w-4" }) => (<svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden><path d={d} /></svg>);
const SEARCH = "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.3-4.3";
const FILTER = "M4 7h16M7 12h10M10 17h4";
const CLOCK = "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2";
export default function Navbar({ tab, setTab, query, setQuery }) {
  const [focus, setFocus] = useState(false);
  const [menu, setMenu] = useState(false);
  const list = SUGGESTIONS.filter((s) => s.includes(query.trim().toLowerCase()));
  const go = (s) => { setQuery(s); setFocus(false); setMenu(false); document.getElementById("browse")?.scrollIntoView({ behavior: "smooth" }); };
  const SearchBox = (
    <div className="relative w-full">
      <form onSubmit={(e) => { e.preventDefault(); go(query); }} role="search" className="flex items-center gap-2 rounded-full border border-white/70 bg-black/40 py-1.5 pl-3 pr-3 backdrop-blur">
        <Ic d={SEARCH} c="h-5 w-5 shrink-0" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setTimeout(() => setFocus(false), 150)} placeholder="Search" aria-label="Search titles" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white" />
        {query ? <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="text-lg leading-none">×</button> : <Ic d={FILTER} c="h-5 w-5 shrink-0" />}
      </form>
      {focus && list.length > 0 && (
        <ul className="absolute left-0 right-0 z-40 mt-1 border border-white/70 bg-black/70 text-sm backdrop-blur">
          {list.map((s) => (
            <li key={s}><button onMouseDown={() => go(s)} className="flex w-full items-center gap-2 border-b border-white/30 px-2 py-1 text-left last:border-0 hover:bg-white/15"><Ic d={CLOCK} c="h-3.5 w-3.5" />{s}</button></li>))}
        </ul>)}
    </div>
  );
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-page items-center gap-3 px-4 py-4 sm:gap-4 sm:px-6">
        <Link href="/" aria-label="Zuno home" className="shrink-0 py-1"><Logo className="h-6 sm:h-7" /></Link>
        <nav className="ml-2 hidden gap-5 text-sm md:flex">
          {TABS.map(([k, l]) => (<button key={k} onClick={() => setTab(k)} className={tab === k ? "text-white" : "text-white/50 hover:text-white"}>{l}</button>))}
        </nav>
        <div className="ml-auto hidden w-60 sm:block lg:w-80">{SearchBox}</div>
        <Link href="/login" className="ml-auto rounded-full bg-zred px-4 py-1.5 text-sm font-semibold hover:bg-red-700 sm:ml-0">Log in</Link>
        <Link href="/signup" className="hidden rounded-full border border-white/70 px-4 py-1.5 text-sm hover:bg-white/10 lg:block">Sign up</Link>
        <Link href="/login" aria-label="Your account" className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/40"><img src="/avatar.jpg" alt="" className="h-full w-full object-cover" /></Link>
        <button className="md:hidden" aria-label="Menu" onClick={() => setMenu(!menu)}><Ic d="M4 7h16M4 12h16M4 17h16" c="h-6 w-6" /></button>
      </div>
      {menu && (
        <div className="mx-4 space-y-3 rounded-lg bg-black/85 p-4 text-base md:hidden">
          <div className="sm:hidden">{SearchBox}</div>
          {TABS.map(([k, l]) => <button key={k} onClick={() => { setTab(k); setMenu(false); }} className={`block ${tab === k ? "" : "text-white/60"}`}>{l}</button>)}
          <Link href="/signup" className="block">Sign up</Link>
        </div>)}
    </header>
  );
}
