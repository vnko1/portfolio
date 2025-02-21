import React, { Suspense } from "react";
import { About, Loader } from "@/components";

const AboutPage = async () => (
  <main className="page">
    <Suspense fallback={<Loader />}>
      <About />
    </Suspense>
  </main>
);

export default AboutPage;
