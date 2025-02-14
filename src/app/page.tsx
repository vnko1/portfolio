import { PriceCard } from "@/components";

export default async function Home() {
  return (
    <section>
      <PriceCard
        tariff="basic"
        icon={{ url: "/rocket.png", id: 1, documentId: "ads" }}
        currency="$"
        id={1}
        documentId="asd"
        amount={30}
        billing_system={"/hr"}
        includes={"Web development; -Advetising; -Music Writing; -Photography"}
      />
    </section>
  );
}
