import React from "react";
import Markdown from "react-markdown";

interface ExperienceProps {
  classNames?: string;
}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div className='p-md rounded-xl bg-gl-0 dark:bg-gd-100 shadow-md dark:shadow-xl'>
      Experience
    </div>
  );
};

export default Experience;
