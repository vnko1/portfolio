import { Home, Carousel, ExperienceCard } from "@/components";

const cards = [
  <ExperienceCard
    key={0}
    period="2018 - Present"
    role="Web Developer"
    id={0}
    documentId="asd"
    description="I have acquired the skills and knowledge necessary to make your project a success."
    place="-Envato"
  />,
  <ExperienceCard
    key={0}
    period="2018 - Present"
    role="Web Developer"
    id={0}
    documentId="asd"
    description="I have acquired the skills and knowledge necessary to make your project a success."
    place="-Envato"
  />,
  <ExperienceCard
    key={0}
    period="2018 - Present"
    role="Web Developer"
    id={0}
    documentId="asd"
    description="I have acquired the skills and knowledge necessary to make your project a success."
    place="-Envato"
  />,
  <ExperienceCard
    key={0}
    period="2018 - Present"
    role="Web Developer"
    id={0}
    documentId="asd"
    description="I have acquired the skills and knowledge necessary to make your project a success."
    place="-Envato"
  />,
];

export default function HomePage() {
  return (
    <section id="section" className="section">
      <Home />
      <Carousel slides={cards} />
    </section>
  );
}
