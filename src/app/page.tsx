import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      <section id="Hero" className="snap-center">
        <Hero />
      </section>
    </div>
  );
}
