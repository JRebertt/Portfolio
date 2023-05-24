import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-white h-screen">
      <Header />
      
      <section id="Hero">
        <Hero />
      </section>
    </div>
  );
}
