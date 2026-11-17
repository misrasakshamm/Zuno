import Art from "./Art";
import { CATEGORIES } from "@/lib/data";
export default function Collage({ shade = "bg-black/70" }) {
  const items = CATEGORIES.flatMap((c) => c.items).slice(0, 24);
  return (
    <div className="absolute inset-0 overflow-hidden bg-zbg" aria-hidden>
      <div className="absolute -inset-[30%] grid -rotate-[12deg] grid-cols-6 gap-4">
        {items.map((it, i) => (<div key={i} className="aspect-[2/3] overflow-hidden rounded-md"><Art title={it.title} /></div>))}
      </div>
      <div className={`absolute inset-0 ${shade}`} />
    </div>
  );
}
