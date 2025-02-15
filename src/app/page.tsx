import { ProjectCard } from "@/components";

export default async function Home() {
  return (
    <section className="p-2-xs grid-container">
      <ProjectCard
        banner={{ url: "/wallpaper.webp", id: 1, documentId: "s" }}
        id={1}
        documentId="as"
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur deleniti dolorum, sapiente veniam voluptatem eos officiis eligendi! Nihil aliquam corrupti dicta eos alias quisquam autem excepturi inventore enim. A incidunt voluptatibus laboriosam quia repellat nihil numquam veniam illum sed."
        }
        // description={null}
        live_link="/"
        code_link={"/"}
        title="App"
        tech_stack="next.js react tailwindcss next.js react tailwindcss next.js react tailwindcss next.js react tailwindcss"
        category={{
          category: "web",
          id: 1,
          documentId: "s",
          order: 1,
          projects: [],
        }}
      />
    </section>
  );
}
