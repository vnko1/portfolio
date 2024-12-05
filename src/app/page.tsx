import { getProfile } from "@/lib/actions";
import { Hero, About, Projects, Contacts } from "@/components";

export const revalidate = 180;

export default async function Home() {
  const data = await getProfile();
  return (
    <main>
      <section className="home-hero">
        <Hero contacts={data.contacts} {...data.heroSection} />
      </section>
      <section id="about" className="about sec-pad">
        <About skills={data.skills} {...data.aboutSection} />
      </section>
      <section id="projects" className="projects sec-pad">
        <Projects {...data.projectsSection} projects={data.projects} />
      </section>
      <section id="contact" className="contact sec-pad dynamicBg">
        <Contacts {...data.contactSection} />
      </section>
    </main>
  );
}
