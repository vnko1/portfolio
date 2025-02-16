import React from "react";

import { LeftSideBar, RightSideBar } from "./components";

interface Props extends React.PropsWithChildren {
  url?: string | null;
}

const AppWrapper: React.FC<Props> = async ({ children, url }) => {
  return (
    <div className="grid grid-rows-1 grid-cols-wrapper h-screen w-full">
      <LeftSideBar url={url} />
      <div className="relative w-full h-screen mx-auto bg-light-light dark:bg-dark-light overflow-hidden">
        <div className="flex flex-col gap-4-xs w-full max-w-[88%] mx-auto">
          {children}
        </div>
      </div>
      <RightSideBar url={url} />
    </div>
  );
};

export default AppWrapper;
