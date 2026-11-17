const PAL = [["#7a0000","#1a0505"],["#0f4c5c","#06161b"],["#6b2a08","#1a0d04"],["#3b2a6b","#0c0818"],["#1f5f3a","#07160d"],["#8a6d1a","#1a1405"],["#5c1a3a","#14060e"],["#223c66","#080d18"]];
const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
export default function Art({ title, className = "" }) {
  const h = hash(title); const [a, b] = PAL[h % PAL.length];
  const words = title.replace(/^S\d+\.E\d+\s*:\s*/, "").split(/[:\s]+/).slice(0, 2).join(" ");
  return (
    <div className={`relative grid h-full w-full place-items-center overflow-hidden p-2 text-center ${className}`}
      style={{ background: `radial-gradient(circle at ${20 + (h % 60)}% 25%, ${a}, ${b} 75%)` }}>
      <div className="absolute inset-0 opacity-30" style={{ background: `repeating-linear-gradient(${(h % 90) + 20}deg, transparent 0 14px, rgba(255,255,255,.06) 14px 15px)` }} />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
      <span className="relative font-extrabold uppercase leading-none tracking-wide text-white drop-shadow" style={{ fontSize: "clamp(11px,1.6vw,20px)" }}>{words}</span>
    </div>
  );
}
