import { ReviewCard } from "@/components";

export default async function Home() {
  return (
    <section>
      <ReviewCard
        avatar={{ id: 1, documentId: "s", url: "/user.svg" }}
        id={1}
        documentId="asd"
        full_name="Emerson Saris"
        location={"58, California, USA"}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin..."
      />
    </section>
  );
}
