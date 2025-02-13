import { ServiceCard } from "@/components";

export default async function Home() {
  return (
    <main>
      <ServiceCard
        icon={{ url: "/dev.png", id: 1, documentId: "sda" }}
        title="Web development"
        description="Lorem ipsum dolor sit amet, solor adipiscing elit. Non nisl solor elementum."
        id={1}
        documentId="12s"
      />
    </main>
  );
}
