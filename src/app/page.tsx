import { Suspense } from "react";

import { Home, Loader } from "@/components";

export default async function HomePage() {
  return (
    <main className="page">
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    </main>
  );
}
