"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Collage from "./Collage";
import Logo from "./Logo";
const field = "w-full rounded-md border border-white/60 bg-black/30 px-3 py-2.5 text-sm outline-none placeholder:text-white/60 focus:border-white";
const btn = "w-full rounded-md bg-zred py-2.5 text-sm font-semibold uppercase hover:bg-red-700";
const social = "flex w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-black py-2.5 text-xs font-semibold uppercase hover:bg-zcard";
export default function AuthShell({ mode }) {
  const router = useRouter();
  const [err, setErr] = useState("");
  const [otp, setOtp] = useState(false);
  const [show, setShow] = useState(false);
  const submit = (e) => {
    e.preventDefault(); const d = Object.fromEntries(new FormData(e.currentTarget));
    if (mode === "verify" && !otp) { if (!/^\d{10}$/.test(d.phone || "")) return setErr("Enter a valid 10-digit number."); setErr(""); return setOtp(true); }
    if (mode === "verify" && !/^\d{4}$/.test(d.code || "")) return setErr("Enter the 4-digit code.");
    if (mode === "signup" && (d.password || "").length < 6) return setErr("Password must be at least 6 characters.");
    router.push("/");
  };
  return (
    <main className="relative grid min-h-screen place-items-center p-4">
      <Collage />
      <div className="relative grid w-full max-w-4xl items-center gap-8 rounded-3xl border border-white/20 bg-black/50 p-8 backdrop-blur-md md:grid-cols-2 md:p-12">
        <div className="text-center">
          <Link href="/" aria-label="Zuno home"><Logo className="mx-auto h-14 md:h-16" /></Link>
          <p className="mt-2 text-sm text-white/80">Your World of Unlimited Stories</p>
        </div>
        <form onSubmit={submit} className="mx-auto w-full max-w-sm space-y-3 rounded-xl md:bg-white/5 md:p-6" noValidate>
          {mode === "verify" && (<>
            <Logo className="mx-auto mb-4 hidden h-7 md:block" />
            <div className="flex gap-2"><span className={`${field} w-20 shrink-0 text-center`}>🇮🇳 +91</span>
              <input name="phone" inputMode="numeric" maxLength={10} placeholder="Enter your number" className={field} /></div>
            {otp && <input name="code" inputMode="numeric" maxLength={4} autoFocus placeholder="Enter 4-digit code (demo: any)" className={field} />}
            <button className={btn}>{otp ? "Confirm code" : "Verify"}</button>
            {otp && <button type="button" onClick={() => setOtp(false)} className="w-full text-xs underline">Change number</button>}
            <p className="text-center text-xs text-white/70">Prefer email? <Link href="/signup" className="underline">Sign up</Link></p></>)}
          {mode === "signup" && (<>
            <input name="name" required placeholder="NAME" className={field} />
            <input name="email" type="email" required placeholder="EMAIL" className={field} />
            <div className="relative"><input name="password" type={show ? "text" : "password"} required placeholder="CREATE PASSWORD" className={field} /><button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">{show ? "Hide" : "Show"}</button></div>
            <button className={btn}>Sign up</button>
            <p className="text-center text-xs"><Link href="/verify" className="underline">Sign up with phone number</Link></p>
            <button type="button" onClick={() => router.push("/")} className={social}>Sign up with Google <b className="text-blue-400">G</b></button>
            <button type="button" onClick={() => router.push("/")} className={social}>Sign up with Facebook <b className="text-blue-500">f</b></button>
            <p className="pt-2 text-center text-xs text-white/80">Already have an account? <Link href="/login" className="ml-1 rounded bg-zred px-2 py-0.5">Log in</Link></p></>)}
          {mode === "login" && (<>
            <input name="email" type="email" required placeholder="EMAIL" className={field} />
            <div className="relative"><input name="password" type={show ? "text" : "password"} required placeholder="PASSWORD" className={field} /><button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs">{show ? "Hide" : "Show"}</button></div>
            <button className={btn}>Log in</button>
            <button type="button" onClick={() => router.push("/")} className={social}>Log in with Google <b className="text-blue-400">G</b></button>
            <button type="button" onClick={() => router.push("/")} className={social}>Log in with Facebook <b className="text-blue-500">f</b></button>
            <p className="pt-2 text-center text-xs text-white/80">New to Zuno? <Link href="/signup" className="ml-1 rounded bg-zred px-2 py-0.5">Sign up</Link> · <Link href="/verify" className="underline">Use phone</Link></p></>)}
          {err && <p role="alert" className="text-xs text-red-400">{err}</p>}
        </form>
      </div>
    </main>
  );
}
