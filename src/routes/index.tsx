import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/milo/Header";
import { Hero } from "../components/milo/Hero";
import { About } from "../components/milo/About";
import { Products } from "../components/milo/Products";
import { Contact } from "../components/milo/Contact";
import { Footer } from "../components/milo/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
