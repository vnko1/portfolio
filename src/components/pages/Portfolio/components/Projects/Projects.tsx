import React from "react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

import { ProjectCardType } from "@/types";
import { ProjectCard } from "@/components";

interface Props {
  projects: ProjectCardType[];
  classNames?: string;
}

const Projects: React.FC<Props> = ({ projects, classNames }) => (
  <AnimatePresence>
    <ul className={`grid-container ${classNames}`}>
      {projects.map((project) => (
        <motion.li
          className="flex"
          key={project.id}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.6,
          }}
          layout
        >
          <ProjectCard classNames="grow" {...project} />
        </motion.li>
      ))}
    </ul>
  </AnimatePresence>
);

export default Projects;
