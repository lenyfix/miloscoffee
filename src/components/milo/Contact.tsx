
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const field = "w-full rounded-2xl border border-transparent bg-cream/95 px-5 py-3 text-sm text-espresso placeholder:text-espresso/70 outline-none transition focus:border-caramel focus:ring-2 focus:ring-cream/60";

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const errs: Record<string, string> = {};

    if (name.length < 2) errs["name"] = "Merci d'indiquer votre nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs["email"] = "Adresse e-mail invalide.";

    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-[1180px] scroll-mt-6 px-3 py-8 md:px-6">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-chocolate shadow-soft md:rounded-[2.75rem]">
        <img src="/images/contact-banner.png" alt="Canette Milo's Coffee plongée dans une mousse de café" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover object-[45%_50%]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/50 via-transparent to-espresso/30 max-md:bg-espresso/55" />
        <div className="grid gap-8 p-7 sm:p-10 md:min-h-[440px] md:grid-cols-[1fr_0.8fr_1fr] md:items-center md:p-12">
          <Reveal>
            <h2 className="text-4xl font-bold leading-[1.05] text-cream lg:text-5xl">Commandez<br />votre Milo's</h2>
            <p className="mt-6 max-w-[14rem] text-lg leading-snug text-cream/95">Découvrez nos recettes et trouvez votre café préféré.</p>
          </Reveal>
          <div className="hidden md:block" />
          <Reveal delay={150}>
            {sent ? (
              <div role="status" className="rounded-3xl bg-cream/95 p-6 text-espresso">
                <CheckCircle2 className="size-8 text-caramel" />
                <p className="mt-3 text-lg font-semibold">Merci, message bien reçu !</p>
                <p className="mt-1 text-sm text-muted-foreground">Ceci est une démonstration : aucun message n'a réellement été envoyé.</p>
                <button onClick={() => setSent(false)} className="mt-4 text-sm font-semibold underline">Nouveau message</button>
              </div>
            ) : (
              <form noValidate onSubmit={submit} className="space-y-3.5">
                <div>
                  <label htmlFor="name" className="sr-only">Nom</label>
                  <input id="name" name="name" placeholder="Nom" autoComplete="name" required aria-invalid={!!errors["name"]} aria-describedby="name-err" className={field} />
                  {errors["name"] && <p id="name-err" className="mt-1 pl-4 text-xs font-medium text-cream">{errors["name"]}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">E-mail</label>
                  <input id="email" name="email" type="email" placeholder="E-mail" autoComplete="email" required aria-invalid={!!errors["email"]} aria-describedby="email-err" className={field} />
                  {errors["email"] && <p id="email-err" className="mt-1 pl-4 text-xs font-medium text-cream">{errors["email"]}</p>}
                </div>
                <label htmlFor="message" className="sr-only">Message (optionnel)</label>
                <textarea id="message" name="message" rows={3} placeholder="Message (optionnel)" className={`${field} resize-none`} />
                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-cream/80">Formulaire de démonstration</p>
                  <button type="submit" className="inline-flex items-center gap-3 rounded-full border border-cream px-7 py-3 font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream hover:text-espresso">Envoyer <ArrowRight className="size-4" /></button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
