import React from "react";
import Image from "next/image";
import Chip from "@mui/material/Chip";
import { ExpertiseType } from "@/types/expertise.types";

interface ExpertiseProps {
  expertise: Array<ExpertiseType>;
  mode: string;
}

const Expertise: React.FC<ExpertiseProps> = ({ expertise, mode }) => {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {expertise.map((item) => (
            <div key={item.id} className="skill">
              <Image
                src={mode === "dark" ? item.darkIcon.url : item.lightIcon.url}
                alt="skill icon"
                width={52}
                height={52}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {item.stackList.map((stack) => (
                  <Chip key={stack.id} className="chip" label={stack.skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
