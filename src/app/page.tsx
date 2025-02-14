import { ExperienceCard } from "@/components";

export default async function Home() {
  return (
    <section>
      <ExperienceCard
        id={0}
        documentId="1"
        role="Web Developer"
        period="2018 - Present"
        place="-Envato"
        description="I have acquired the skills and knowledge necessary to make your project a success."
      />
    </section>
  );
}
