import { Home, Carousel, ExperienceCard } from "@/components";
const data = {
  title_md: "I'm **Andrii**",
  text: "I'm a Kyiv based fullstack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.",
  sub_title: "Fullstack Developer",
  title: "s",
  id: 1,
  documentId: "sd",
};
export default function HomePage() {
  return (
    <main className="page">
      <Home {...data} />
    </main>
  );
}
