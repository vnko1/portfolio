import React from "react";

interface Props extends React.PropsWithChildren {}

const AppWrapper: React.FC<Props> = ({ children }) => (
  <div className="grid grid-rows-1 grid-cols-wrapper h-screen w-full">
    <div className="h-screen bg-light-accent-200 dark:bg-dark-accent-200 mix-blend-multiply bg-no-repeat bg-cover bg-main" />
    <div className="w-full h-screen mx-auto bg-light-light dark:bg-dark-light">
      <div className="w-full max-w-[88%] mx-auto">
        <main className="grid grid-rows-1 grid-cols-1 md:grid-cols-section gap-3-xs">
          {children}
        </main>
      </div>
    </div>
    <div className="h-screen bg-light-accent-200 dark:bg-dark-accent-200 mix-blend-multiply bg-no-repeat bg-cover bg-main" />
  </div>
);

export default AppWrapper;
