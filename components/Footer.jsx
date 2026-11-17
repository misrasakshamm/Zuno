import Logo from "./Logo";
const col = (t, l) => (<div><h4 className="mb-3 text-xs font-bold uppercase">{t}</h4><ul className="space-y-1.5 text-xs">{l.map(([n, h]) => <li key={n}><a href={h} className="hover:underline">{n}</a></li>)}</ul></div>);
export default function Footer() {
  return (
    <footer className="mt-16 rounded-t-3xl bg-zdark px-6 py-12 sm:px-12">
      <div className="mx-auto grid max-w-page gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div><Logo className="h-12" />
          <p className="mt-4 max-w-xs text-xs leading-snug">At <b>Zuno</b>, we believe entertainment should be limitless, personal, and always within reach. Our platform brings together the best of movies, web series, live shows, and originals—curated for every mood and every screen.</p>
          <p className="mt-3 max-w-xs text-xs leading-snug">With a sleek, user-friendly experience, Zuno is more than just streaming—it’s about connecting people with stories that inspire, thrill, and move them.</p></div>
        <div>{col("Features", [["Movies","#top"],["TV Shows","#top"],["Web Series","#top"]])}
          <h4 className="mb-2 mt-6 text-xs font-bold uppercase">Available on</h4><div className="flex gap-3 text-lg"><a href="#" aria-label="Google Play">▶</a><a href="#" aria-label="App Store"></a></div></div>
        {col("Support", [["About us","#"],["Contact us","#"],["Help centre","#faq"],["Terms and Condition","#"]])}
        <div><h4 className="mb-3 text-xs font-bold uppercase">Follow us</h4>
          <div className="flex gap-3 text-lg font-bold"><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="X">𝕏</a><a href="#" aria-label="Google">G</a></div>
          <p className="mt-2 text-xs"><b>DESIGNED</b> by Suryansh</p></div>
      </div>
    </footer>
  );
}
