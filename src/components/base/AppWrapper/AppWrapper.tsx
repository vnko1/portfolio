import React from "react";

interface Props extends React.PropsWithChildren {}

const AppWrapper: React.FC<Props> = async ({ children }) => {
  return (
    <div className="grid grid-rows-1 grid-cols-wrapper h-screen w-full">
      <div className="h-screen bg-light-accent-200 dark:bg-dark-accent-200 mix-blend-multiply bg-no-repeat bg-cover bg-main" />
      <div className="w-full h-screen mx-auto bg-light-light dark:bg-dark-light overflow-hidden">
        <div className="flex flex-col gap-4-xs w-full max-w-[88%] mx-auto">
          {children}
        </div>
      </div>
      <div className="h-screen bg-light-accent-200 dark:bg-dark-accent-200 mix-blend-multiply bg-no-repeat bg-cover bg-main" />
    </div>
  );
};

export default AppWrapper;
