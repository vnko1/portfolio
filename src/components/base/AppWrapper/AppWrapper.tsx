import React from "react";

import { LeftSideBar, RightSideBar } from "./components";

interface Props extends React.PropsWithChildren {
  url?: string | null;
  copyright_text?: string;
}

const AppWrapper: React.FC<Props> = async ({
  children,
  url,
  copyright_text,
}) => {
  return (
    <div className="grid grid-rows-1 grid-cols-1 xl:grid-cols-wrapper h-screen">
      <LeftSideBar url={url} />
      <div className="relative w-full h-screen mx-auto bg-bg overflow-x-hidden hide-scroll">
        <div className="flex flex-col gap-4-xs w-full max-w-[88%] mx-auto">
          {children}
        </div>
      </div>
      <RightSideBar url={url} copyright_text={copyright_text} />
    </div>
  );
};

export default AppWrapper;
