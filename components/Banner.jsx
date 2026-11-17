import Logo from "./Logo";
import Collage from "./Collage";
export default function Banner() {
  return (
    <section className="mt-16 overflow-hidden rounded-md">
      <div className="relative flex min-h-[220px] items-center bg-gradient-to-r from-[#1a1010] via-zdark to-zred p-6 sm:p-10">
        <div className="absolute inset-y-0 left-[35%] hidden w-[65%] sm:block"><Collage shade="bg-zdark/60" /></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10">
          <h2 className="max-w-[12rem] text-2xl font-semibold leading-tight sm:text-3xl">Start a free trial with just <span className="block text-3xl">$0</span></h2>
          <a href="#plans" className="mt-2 inline-block rounded bg-zdark px-4 py-1.5 text-sm font-semibold hover:bg-zred">Start now</a>
        </div>
        <Logo className="absolute right-[12%] top-1/2 hidden h-14 -translate-y-1/2 text-white sm:block" />
      </div>
    </section>
  );
}
