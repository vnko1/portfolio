import { Hero, About, Projects, Contacts } from "@/components";

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <Hero />
      </section>
      <section className="about sec-pad">
        <About />
      </section>
      <section className="projects sec-pad">
        <Projects />
      </section>
      <section className="contact sec-pad dynamicBg">
        <Contacts />
      </section>
    </main>
  );
}
