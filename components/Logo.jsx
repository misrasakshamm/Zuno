// Fixed aspect ratio + fallback width/height attributes so the SVG never falls back to the browser default (300x150)
// and can't blow up or get clipped at the top of the page. Size it with a height class, e.g. className="h-6".
export default function Logo({ className = "h-6" }) {
  return (
    <svg viewBox="0 0 118 30" width="118" height="30" style={{ aspectRatio: "118 / 30" }}
      className={`block w-auto max-w-none shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="6.5" strokeLinejoin="miter" role="img" aria-label="Zuno">
      <path d="M3 4H25L3 26H25" />
      <path d="M35 2V23H55V2" /><path d="M45 2V16" strokeWidth="4" />
      <path d="M65 28V4L87 28V4" />
      <path d="M96 4H115V26H96Z" /><path d="M105 12H107V18H105Z" strokeWidth="2" />
    </svg>
  );
}
