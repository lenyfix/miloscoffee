import { Instagram } from "lucide-react";
import logo from "@/assets/logo.webp.asset.json";
import { navLinks } from "./Header";

function TikTok() {
  return <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6Z" /></svg>;
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-[1180px] flex-col items-center gap-6 px-6 pb-10 pt-4 md:flex-row md:justify-between md:px-20">
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
        <img src={logo.url} alt="Milo's Coffee" className="h-11 w-auto" />
        <span className="hidden h-10 w-px bg-border md:block" />
        <nav aria-label="Pied de page" className="flex flex-wrap justify-center gap-x-9 gap-y-2">
          {navLinks.map((l) => <a key={l.href} href={l.href} className="text-[15px] font-medium transition-colors hover:text-caramel">{l.label}</a>)}
        </nav>
      </div>
      <div className="flex gap-3">
        <span role="img" aria-label="Instagram (bientôt)" title="Bientôt disponible" className="grid size-10 place-items-center rounded-full bg-espresso text-cream transition-transform hover:-translate-y-0.5"><Instagram className="size-4" /></span>
        <span role="img" aria-label="TikTok (bientôt)" title="Bientôt disponible" className="grid size-10 place-items-center rounded-full bg-espresso text-cream transition-transform hover:-translate-y-0.5"><TikTok /></span>
      </div>
    </footer>
  );
}
