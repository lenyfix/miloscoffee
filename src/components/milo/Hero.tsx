import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="accueil" className="mx-auto mt-5 max-w-[1180px] scroll-mt-6 px-3 md:px-6">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-espresso shadow-soft md:rounded-[2.75rem]">
        <img src="/images/hero.png" alt="Canette Milo's Coffee glacée entourée d'éclaboussures de lait et de grains de café" fetchPriority="high"
          className="absolute inset-0 -z-10 hidden h-full w-full scale-[1.04] md:block object-cover object-[50%_40%]" />
                <div className="relative flex flex-col p-6 sm:p-10 md:block md:aspect-[1774/887] md:min-h-0 md:p-0">
          <Reveal className="md:absolute md:left-[7%] md:top-[17%]">
            <p className="flex items-center gap-3 text-xs font-medium text-cream/90">
              01 <span className="h-px w-5 bg-cream/70" /> Notre signature <ArrowRight className="size-5 opacity-70" strokeWidth={1.25} />
            </p>
          </Reveal>
          <h1 className="text-[clamp(3rem,10vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight text-cream drop-shadow-[0_6px_20px_oklch(0.2_0.05_40/0.5)] md:contents">
            <Reveal delay={100} className="md:absolute md:left-[6.5%] md:top-[27%]"><span>Milo's</span></Reveal>
            <Reveal delay={200} className="text-right md:absolute md:right-[3.5%] md:top-[29%] md:mt-0"><span>Coffee</span></Reveal>
          </h1>
          <div aria-hidden className="-mx-6 my-4 h-[70vw] overflow-hidden sm:-mx-10 md:hidden">
            <img src="/images/hero.png" alt="" className="h-full w-full scale-[1.6] object-cover object-[50%_30%]" />
          </div>
          <Reveal delay={300} className="md:absolute md:left-[7%] md:top-[57%]">
            <p className="max-w-[16rem] text-lg leading-snug text-cream md:text-[clamp(1rem,1.7vw,1.3rem)]">Le café glacé qui réveille vos sens.</p>
          </Reveal>
          <Reveal delay={400} className="mt-6 flex flex-wrap gap-3 md:absolute md:right-[4.5%] md:top-[58%] md:mt-0">
            <a href="#cafes" className="rounded-full border border-cream/90 px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream/10">Découvrir la carte</a>
            <a href="#contact" className="rounded-full bg-cream px-5 py-2.5 text-sm font-semibold text-espresso shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-deep">Commander</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
