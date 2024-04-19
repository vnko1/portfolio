import { Hero, About } from "@/components";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <Hero />
      </section>
      <section className="about sec-pad">
        <About />
      </section>
      <section className="projects sec-pad"></section>
    </main>
  );
}
