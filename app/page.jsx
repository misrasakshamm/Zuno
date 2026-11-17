"use client";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Row from "@/components/Row";
import Recent from "@/components/Recent";
import Faq from "@/components/Faq";
import Plans from "@/components/Plans";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import { CATEGORIES } from "@/lib/data";
export default function Home() {
  const [tab, setTab] = useState("all");
  const [query, setQuery] = useState("");
  const [more, setMore] = useState(false);
  const rows = useMemo(() => CATEGORIES.map((c) => ({ ...c, items: c.items.filter((i) => (tab === "all" || i.type === tab) && i.title.toLowerCase().includes(query.toLowerCase())) })).filter((c) => c.items.length), [tab, query]);
  const shown = more ? rows : rows.slice(0, 2);
  return (
    <main className="bg-zbg">
      <Navbar tab={tab} setTab={setTab} query={query} setQuery={setQuery} />
      <Hero />
      <div id="browse" className="mx-auto max-w-page scroll-mt-4 px-4 pb-4 sm:px-6">
        {shown.length === 0 && <p className="py-10 text-center text-sm text-white/60">No titles match your search.</p>}
        {shown.map((c) => <Row key={c.name} {...c} />)}
        {rows.length > 2 && <div className="mt-8 text-center"><button onClick={() => setMore(!more)} className="rounded-full bg-zred px-6 py-1 text-[15px] hover:bg-red-700">{more ? "show less" : "explore more"}</button></div>}
        <Recent /><Faq /><Plans /><Banner />
      </div>
      <Footer />
    </main>
  );
}
