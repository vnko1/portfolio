import { Contact } from "@/components";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const tariff = (await searchParams).tariff;

  return <Contact tariff={tariff} />;
};

export default page;
