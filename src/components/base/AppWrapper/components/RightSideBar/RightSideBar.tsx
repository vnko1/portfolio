"use client";
import React from "react";

interface Props {
  url?: string | null;
}
const RightSideBar: React.FC<Props> = () => {
  return (
    <div className="flex flex-col items-center justify-between pb-4-xs pt-[120px] h-screen bg-light-accent-200 dark:bg-dark-accent-200 mix-blend-multiply bg-no-repeat bg-cover bg-main">
      RightSideBar
    </div>
  );
};

export default RightSideBar;
