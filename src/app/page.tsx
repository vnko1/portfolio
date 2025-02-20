import { strapiApi } from "@/api";
import { Home, Carousel, ExperienceCard } from "@/components";

export default async function HomePage() {
  const res = await strapiApi.getHomeData();

  return (
    <main className="page">
      <Home {...res.data} />
    </main>
  );
}
