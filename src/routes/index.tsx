import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/milo/Header";
import { Hero } from "@/components/milo/Hero";
import { About } from "@/components/milo/About";
import { Products } from "@/components/milo/Products";
import { Contact } from "@/components/milo/Contact";
import { Footer } from "@/components/milo/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Milo's Coffee — Le café glacé qui réveille vos sens" },
      { name: "description", content: "Milo's Coffee : cafés glacés modernes et gourmands. Découvrez l'Americano, le Caramel Latte et le Mocha Cream." },
      { property: "og:title", content: "Milo's Coffee — Le café glacé qui réveille vos sens" },
      { property: "og:description", content: "Cafés glacés modernes et gourmands : Americano, Caramel Latte, Mocha Cream." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
