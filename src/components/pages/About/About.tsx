import React from "react";

import { getAboutData } from "@/lib";

const About: React.FC = async () => {
  const [commonRes, aboutRes] = await getAboutData();

  return <div>About</div>;
};

export default About;
