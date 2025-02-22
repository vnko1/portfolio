import React from "react";

import {
  ClientsSection,
  ExperienceSection,
  ReviewsSection,
  SkillsSection,
} from "./components";
import { strapiApi } from "@/api";

const Resume: React.FC = async () => {
  const response = await strapiApi.getResumeData();

  return (
    <>
      <ExperienceSection experience={response.data.experience} />
      <SkillsSection skills={response.data.skills} />
      <ReviewsSection reviews={response.data.reviews} />
      <ClientsSection clients={response.data.clients} />
    </>
  );
};

export default Resume;
