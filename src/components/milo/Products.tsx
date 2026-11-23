import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import americano from "@/assets/americano.webp.asset.json";
import caramel from "@/assets/caramel-latte.webp.asset.json";
import mocha from "@/assets/mocha-cream.webp.asset.json";
import { Bean } from "./Bean";
import { Reveal } from "./Reveal";

const products = [
  { name: "Americano", img: americano.url, btn: "bg-espresso", desc: "Un café noir intense servi sur glace, pour les amateurs de caractère." },
  { name: "Caramel Latte", img: caramel.url, btn: "bg-chocolate", desc: "Un latte onctueux sublimé par un filet de caramel doré." },
  { name: "Mocha Cream", img: mocha.url, btn: "bg-latte", desc: "Café, chocolat et crème fouettée : la pause la plus gourmande." },
];

export function Products() {
  const [open, setOpen] = useState<(typeof products)[number] | null>(null);
  return (
    <section id="cafes" className="mx-auto max-w-[1180px] scroll-mt-6 px-6 py-10 md:py-14">
      <Reveal className="relative mx-auto w-fit px-10">
        <Bean className="-left-20 -top-4 w-11" rotate={-30} />
        <Bean className="-left-4 -top-12 w-8" rotate={20} />
        <Bean className="-right-14 -top-2 w-10" rotate={60} />
        <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl">Notre assortiment</h2>
      </Reveal>
      <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-6">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={i * 120} className="group flex flex-col items-center">
            <div className="flex h-[300px] items-end justify-center lg:h-[340px]">
              <img src={p.img} alt={`Canette Milo's Coffee ${p.name}`} loading="lazy" className="h-full w-auto object-contain drop-shadow-[0_25px_25px_oklch(0.3_0.06_45/0.25)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]" />
            </div>
            <button onClick={() => setOpen(p)} className={`mt-5 flex w-full max-w-[240px] items-center justify-between rounded-full py-2.5 pl-8 pr-2.5 text-lg font-semibold text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 ${p.btn}`}>
              {p.name}
              <span className="grid size-8 place-items-center rounded-full border border-cream/80 transition-transform duration-300 group-hover:translate-x-0.5"><ArrowRight className="size-4" /></span>
            </button>
          </Reveal>
        ))}
      </div>
      {open && (
        <div role="dialog" aria-modal="true" aria-labelledby="pd-title" className="fixed inset-0 z-50 grid place-items-center bg-espresso/50 p-4 backdrop-blur-sm" onClick={() => setOpen(null)} onKeyDown={(e) => e.key === "Escape" && setOpen(null)}>
          <div className="relative grid w-full max-w-lg items-center gap-6 rounded-[2rem] bg-background p-7 shadow-soft sm:grid-cols-[140px_1fr]" onClick={(e) => e.stopPropagation()}>
            <button autoFocus onClick={() => setOpen(null)} aria-label="Fermer" className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-cream-deep"><X className="size-4" /></button>
            <img src={open.img} alt="" className="mx-auto h-44 w-auto object-contain" />
            <div>
              <h3 id="pd-title" className="text-3xl font-bold">{open.name}</h3>
              <p className="mt-3 text-muted-foreground">{open.desc}</p>
              <a href="#contact" onClick={() => setOpen(null)} className="mt-5 inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 font-semibold text-cream transition-transform hover:-translate-y-0.5">Commander <ArrowRight className="size-4" /></a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
