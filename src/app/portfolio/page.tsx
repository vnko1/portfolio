import { Portfolio } from "@/components";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const query = (await searchParams).query;

  return <Portfolio query={query} />;
};

export default Page;
