import React, { FC } from "react";
import { Project } from "./components";

import myPet from "@/lib/data/myPet.json";
import news from "@/lib/data/news.json";
import chapter from "@/lib/data/chapter.json";
import ecosolution from "@/lib/data/ecosolution.json";

const projects = [myPet, news, chapter, ecosolution];

const Projects: FC = () => {
  return (
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-bg">
        <span className="heading-sec__main">Projects</span>
        <span className="heading-sec__sub">
          A list of projects in which I participated as a developer
        </span>
      </h2>
      <ul className="projects__content">
        {projects.map((el, i) => (
          <li key={i}>
            <Project
              title={el.title}
              description={el.description}
              link={el.link}
              image={el.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
