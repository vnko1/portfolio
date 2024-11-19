import { Hero, About, Projects, Contacts } from "@/components";
import { getProfile } from "@/lib/actions";

export default async function Home() {
  const data = await getProfile();
  return (
    <main>
      <section className="home-hero">
        <Hero />
      </section>
      <section id="about" className="about sec-pad">
        <About />
      </section>
      <section id="projects" className="projects sec-pad">
        <Projects />
      </section>
      <section id="contact" className="contact sec-pad dynamicBg">
        <Contacts {...data.contactSection} />
      </section>
    </main>
  );
}
