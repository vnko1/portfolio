import { Suspense } from "react";

import { Home, Loader } from "@/components";

export default function HomePage() {
  return <Home />;
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
}
