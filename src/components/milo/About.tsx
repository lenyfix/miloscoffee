import { Boxes, Leaf, Coffee } from "lucide-react";
import beans from "@/assets/coffee-beans.webp.asset.json";
import { Reveal } from "./Reveal";

const pills = [
  { t: "Café", c: "bg-cream text-espresso -rotate-6" },
  { t: "Glacé", c: "bg-chocolate text-cream rotate-6" },
  { t: "Gourmand", c: "bg-cream text-espresso -rotate-3" },
  { t: "Original", c: "bg-cream text-espresso -rotate-6" },
];

export function About() {
  return (
    <section id="univers" className="mx-auto grid max-w-[1180px] scroll-mt-6 items-center gap-10 px-6 py-16 md:grid-cols-[1fr_1.25fr] md:px-14 md:py-20">
      <Reveal>
        <h2 className="text-5xl font-bold tracking-tight md:text-6xl">À propos</h2>
        <p className="mt-8 max-w-sm text-xl font-medium leading-snug"><strong className="font-bold">Milo's Coffee,</strong> c'est une pause café moderne, gourmande et rafraîchissante, pensée pour tous les amateurs de café.</p>
        <p className="mt-6 max-w-sm leading-relaxed text-muted-foreground">Des recettes originales, des ingrédients de qualité et une expérience unique à chaque gorgée.</p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        <Reveal delay={100} className="grid grid-cols-2 place-items-center gap-3 rounded-[1.75rem] bg-cream-deep/40 p-5">
          {pills.map((p) => (
            <span key={p.t} className={`rounded-full border border-border px-4 py-1.5 text-sm font-semibold shadow-sm transition-transform duration-300 hover:rotate-0 ${p.c}`}>{p.t}</span>
          ))}
        </Reveal>
        <Reveal delay={150} className="relative min-h-[180px] overflow-hidden rounded-[1.75rem] sm:row-span-2">
          <img src={beans.url} alt="Grains de café torréfiés" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 to-transparent" />
          <p className="relative p-6 pt-14 text-xl leading-tight text-cream"><strong className="font-bold">Café<br />sélectionné</strong><br /><span className="text-lg">avec soin</span></p>
        </Reveal>
        <Reveal delay={200} className="flex items-center gap-5 rounded-[1.75rem] bg-espresso-grad p-6 text-cream shadow-soft">
          <Boxes className="size-11 shrink-0" strokeWidth={1.25} /><p className="font-semibold leading-tight">Recettes<br />rafraîchissantes</p>
        </Reveal>
        <Reveal delay={250} className="flex items-center gap-5 rounded-[1.75rem] bg-cream-deep p-6 text-espresso">
          <Leaf className="size-10 shrink-0" strokeWidth={1.25} /><p className="font-semibold leading-tight">Ingrédients<br />naturels</p>
        </Reveal>
        <Reveal delay={300} className="flex items-center gap-6 rounded-[1.75rem] bg-espresso p-6 text-cream shadow-soft">
          <Coffee className="size-12 shrink-0" strokeWidth={1.25} /><p className="text-2xl font-bold leading-tight">100%<br />plaisir</p>
        </Reveal>
      </div>
    </section>
  );
}
