"use client";
import { useEffect, useState } from "react";
// Fanart.tv needs a free API key: https://fanart.tv/get-an-api-key/  -> put it in .env.local as NEXT_PUBLIC_FANART_API_KEY
const KEY = process.env.NEXT_PUBLIC_FANART_API_KEY;
// TMDB ids for movies, TVDB ids for shows. Titles not listed keep the local image / generated art.
const IDS = {
  "joker": ["movies", 475557], "joker:the world is a stage": ["movies", 475557], "star wars: the last jedi": ["movies", 181808],
  "batman: unmask the truth": ["movies", 414906], "avengers: infinity war": ["movies", 299536], "dune": ["movies", 438631],
  "dune: the origins": ["movies", 438631], "the martian": ["movies", 286217], "interstellar": ["movies", 157336],
  "inception": ["movies", 27205], "blade runner": ["movies", 335984], "titanic": ["movies", 597], "the notebook": ["movies", 11036],
  "la la land": ["movies", 313369], "the greatest showman": ["movies", 316029], "the shape of water": ["movies", 399055],
  "annabelle": ["movies", 250546], "the nun": ["movies", 439079], "us": ["movies", 458723], "the shining": ["movies", 694],
  "talk to me": ["movies", 1008042], "star trek": ["movies", 13475], "the terminal": ["movies", 594], "glass": ["movies", 450465],
  "before sunrise": ["movies", 76], "nos etoiles contraires": ["movies", 222935],
  "demon slayer": ["tv", 348545], "game of thrones": ["tv", 121361], "breaking bad": ["tv", 81189],
};
const norm = (t) => t.replace(/^S\d+\.E\d+\s*:\s*/i, "").trim().toLowerCase();
const cache = new Map();
const load = (kind, id) => {
  const k = kind + id;
  if (!cache.has(k)) cache.set(k, fetch(`https://webservice.fanart.tv/v3/${kind}/${id}?api_key=${KEY}`).then((r) => (r.ok ? r.json() : null)).catch(() => null));
  return cache.get(k);
};
const pick = (arr, i = 0) => (arr && arr.length ? arr[i % arr.length].url : null);
/** variant: poster | thumb | background | logo */
export function useFanart(title, variant = "poster", idx = 0) {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const hit = IDS[norm(title)];
    if (!KEY || !hit) return;
    let live = true;
    load(hit[0], hit[1]).then((d) => {
      if (!d || !live) return;
      const u = hit[0] === "movies"
        ? (variant === "poster" ? pick(d.movieposter) : pick(d.moviebackground || d.moviethumb, idx))
        : variant === "poster" ? pick(d.tvposter) : variant === "logo" ? pick(d.hdtvlogo || d.clearlogo) : variant === "thumb" ? pick(d.tvthumb || d.showbackground, idx) : pick(d.showbackground, idx);
      if (u) setUrl(u);
    });
    return () => { live = false; };
  }, [title, variant, idx]);
  return url;
}
