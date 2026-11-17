"use client";
import { useState } from "react";
import Modal from "./Modal";
import { PLANS } from "@/lib/data";
export default function Plans() {
  const [plan, setPlan] = useState(null);
  const [done, setDone] = useState(false);
  return (
    <section id="plans" className="mt-16">
      <h2 className="mb-4 text-3xl font-semibold">Subscription and Plans</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className="flex flex-col rounded-lg border border-zline bg-zcard p-4">
            <h3 className="text-sm font-semibold">{p.name}</h3>
            <div className="my-5 flex flex-1 items-center justify-between gap-3">
              <ul className="space-y-1 text-xs text-white/60">{p.features.map((f) => <li key={f}>● {f}</li>)}</ul>
              <span className="text-6xl font-bold text-white/30">${p.price}</span>
            </div>
            <button onClick={() => { setDone(false); setPlan(p); }} className="rounded bg-zdeep py-1.5 text-sm font-semibold hover:bg-zred">Buy Now</button>
          </div>))}
      </div>
      <Modal open={!!plan} onClose={() => setPlan(null)} title={plan?.name}>
        {done ? <p className="text-sm">Subscription confirmed (demo). Enjoy Zuno!</p> : (
          <div className="space-y-3 text-sm"><p>You selected <b>{plan?.name}</b> at <b>${plan?.price}</b>/month.</p>
            <button onClick={() => setDone(true)} className="w-full rounded bg-zdeep py-2 font-semibold hover:bg-zred">Confirm</button></div>)}
      </Modal>
    </section>
  );
}
