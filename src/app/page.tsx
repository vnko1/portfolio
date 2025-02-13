import { PriceCard } from "@/components";

export default async function Home() {
  return (
    <main>
      <PriceCard
        icon={{ id: 1, documentId: "asd", url: "/flash.svg" }}
        id={1}
        documentId="asd"
        tariff="basic"
        currency="$"
        amount={30}
        billing_system={"/hr"}
        includes="Web development; -Advertising; -Music Writing; -Photography"
      />
    </main>
  );
}
