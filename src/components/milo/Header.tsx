
import { useState } from "react";
import { Menu, X } from "lucide-react";

const left = [{ href: "#accueil", label: "Accueil" }, { href: "#univers", label: "Notre univers" }];
const right = [{ href: "#cafes", label: "Nos cafés" }, { href: "#contact", label: "Contact" }];
export const navLinks = [...left, ...right];

function NavItem({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <a href={href} className="group relative inline-flex items-center gap-2 text-[15px] font-medium text-foreground transition-colors hover:text-caramel">
      {active && <span className="size-2.5 rounded-full bg-espresso" aria-hidden />}
      {label}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-caramel transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-30 mx-auto max-w-[1180px] px-5 pt-4 md:px-8">
      <nav aria-label="Navigation principale" className="hidden grid-cols-[1fr_auto_1fr] items-center md:grid">
        <div className="flex justify-evenly"><NavItem {...left[0]!} active /><NavItem {...left[1]!} /></div>
        <a href="#accueil" aria-label="Milo's Coffee — accueil"><img src="/images/logo.png" alt="Milo's Coffee" className="h-12 w-auto transition-transform duration-300 hover:scale-105 lg:h-14" /></a>
        <div className="flex justify-evenly">{right.map((l) => <NavItem key={l.href} {...l} />)}</div>
      </nav>
      <div className="flex items-center justify-between md:hidden">
        <a href="#accueil"><img src="/images/logo.png" alt="Milo's Coffee" className="h-10 w-auto" /></a>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} className="grid size-11 place-items-center rounded-full bg-espresso text-cream">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <ul id="mobile-menu" className="absolute inset-x-5 top-full mt-2 space-y-1 rounded-3xl bg-cream p-3 shadow-soft md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-medium hover:bg-cream-deep">{l.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
