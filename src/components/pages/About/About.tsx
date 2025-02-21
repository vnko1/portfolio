import React from "react";

import { getAboutData } from "@/lib";
import { AboutSection, ServicesSection } from "./components";

const About: React.FC = async () => {
  const [commonRes, aboutRes] = await getAboutData();
  const [commonData, cvData] = commonRes;
  const commonProps = { ...commonData.data, ...cvData.data, ...aboutRes.data };

  return (
    <>
      <AboutSection {...commonProps} />
      <ServicesSection services={aboutRes.data.services} />
    </>
  );
};

export default About;
