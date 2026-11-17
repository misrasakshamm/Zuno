"use client";
import { useEffect } from "react";
export default function Modal({ open, onClose, title, children }) {
  useEffect(() => { if (!open) return; const h = (e) => e.key === "Escape" && onClose(); window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="w-full max-w-md rounded-xl bg-zcard p-6" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose} aria-label="Close" className="text-2xl leading-none text-white/70 hover:text-white">×</button></div>
        {children}
      </div>
    </div>
  );
}
