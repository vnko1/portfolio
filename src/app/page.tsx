import { Wrapper } from "@/components";

export const revalidate = 300;

export default function Home() {
  return (
    <main>
      <Wrapper>
        <p className='tag'>Tag</p>
      </Wrapper>
    </main>
  );
}
