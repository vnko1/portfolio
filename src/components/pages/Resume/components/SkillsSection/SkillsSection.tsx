import React from "react";

import { SkillType } from "@/types";
import { Skill } from "@/components";

interface Props {
  skills: SkillType[];
}
const SkillsSection: React.FC<Props> = ({ skills }) =>
  skills.length ? (
    <section>
      <h2 className="section-title line">
        My <span>Skills</span>
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2-md justify-between">
        {skills.map((skill) => (
          <li key={skill.id}>
            <Skill {...skill} />
          </li>
        ))}
      </ul>
    </section>
  ) : null;

export default SkillsSection;
