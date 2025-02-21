import React, { Suspense } from "react";

import { Loader, Resume } from "@/components";

const Page = () => {
  return (
    <main className="page">
      <Suspense fallback={<Loader />}>
        <Resume />
      </Suspense>
    </main>
  );
};

export default Page;
