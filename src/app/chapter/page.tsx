import React from "react";
import { ProjectDescription, ProjectTitle } from "@/components";
import data from "@/lib/data/chapter.json";

function ChapterPage() {
  return (
    <main>
      <section className="project-cs-hero">
        <ProjectTitle
          title={data.title}
          description={data.description}
          liveLink={data.liveLink}
        />
      </section>
      <section className="project-details">
        <ProjectDescription
          overview={data.overview}
          mainDescription={data.mainDescription}
          liveLink={data.liveLink}
          codeLink={data.codeLink}
          image={data.image}
          tools={data.tools}
        />
      </section>
    </main>
  );
}

export default ChapterPage;
