import { Banner } from "@/components";

export const revalidate = 300;

export default function Home() {
  return (
    <main>
      <Banner src='/1.jpg' alt='avatar' />
    </main>
  );
}
