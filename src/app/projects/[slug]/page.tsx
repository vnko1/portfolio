import React from "react";
import { ProjectDescription, ProjectTitle } from "@/components";
import { getProject } from "@/lib/actions";

async function Page({ params }: { params: { slug: string } }) {
  const data = await getProject(params.slug);

  return (
    <main>
      <section className="project-cs-hero">
        <ProjectTitle
          title={data.title}
          subTitle={data.subTitle}
          liveLink={data.liveLink}
        />
      </section>
      <section className="project-details">
        <ProjectDescription
          overview={data.overview}
          liveLink={data.liveLink}
          codeLink={data.codeLink}
          banner={data.banner}
          tools={data.tools}
        />
      </section>
    </main>
  );
}

export default Page;
