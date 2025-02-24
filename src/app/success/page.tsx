"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Page() {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => push("/"), 10000);
  }, [push]);

  return (
    <section className="grow flex flex-col items-center justify-center gap-[60px]">
      <h1 className="text-center">Your message was sent successfully!</h1>
      <Link className="link" href="/">
        Return Home
      </Link>
    </section>
  );
}

export default Page;
